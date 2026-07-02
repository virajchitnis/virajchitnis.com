/// <reference types="@cloudflare/workers-types" />

interface Env {
  TURNSTILE_SECRET_KEY: string;
  FASTMAIL_API_TOKEN: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  turnstileToken?: unknown;
}

interface JmapSession {
  apiUrl: string;
  primaryAccounts: Record<string, string>;
}

const TO_ADDRESS = 'mail@virajchitnis.com';
const MAX_BODY_BYTES = 10_000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;

function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function jsonResponse(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  if (ip) body.set('remoteip', ip);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

async function sendViaFastmail(
  token: string,
  fields: { name: string; email: string; message: string }
): Promise<void> {
  const authHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const sessionResponse = await fetch('https://api.fastmail.com/jmap/session', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!sessionResponse.ok) throw new Error('Failed to fetch JMAP session');
  const session = (await sessionResponse.json()) as JmapSession;
  const accountId = session.primaryAccounts['urn:ietf:params:jmap:mail'];
  if (!accountId) throw new Error('No mail account on JMAP session');

  const lookupResponse = await fetch(session.apiUrl, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({
      using: ['urn:ietf:params:jmap:core', 'urn:ietf:params:jmap:mail'],
      methodCalls: [
        ['Mailbox/query', { accountId, filter: { role: 'drafts' } }, 'draftsQuery'],
        ['Identity/get', { accountId }, 'identities'],
      ],
    }),
  });
  if (!lookupResponse.ok) throw new Error('Failed to look up JMAP mailbox/identity');
  const lookup = (await lookupResponse.json()) as {
    methodResponses: [string, Record<string, unknown>, string][];
  };

  const draftsQuery = lookup.methodResponses.find((r) => r[2] === 'draftsQuery')?.[1] as
    | { ids?: string[] }
    | undefined;
  const identities = lookup.methodResponses.find((r) => r[2] === 'identities')?.[1] as
    | { list?: { id: string; email: string }[] }
    | undefined;

  const draftsMailboxId = draftsQuery?.ids?.[0];
  const identity = identities?.list?.[0];
  if (!draftsMailboxId) throw new Error('No Drafts mailbox found');
  if (!identity) throw new Error('No sending identity found');

  const sendResponse = await fetch(session.apiUrl, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({
      using: [
        'urn:ietf:params:jmap:core',
        'urn:ietf:params:jmap:mail',
        'urn:ietf:params:jmap:submission',
      ],
      methodCalls: [
        [
          'Email/set',
          {
            accountId,
            create: {
              draft: {
                mailboxIds: { [draftsMailboxId]: true },
                keywords: { $draft: true },
                from: [{ email: identity.email }],
                to: [{ email: TO_ADDRESS }],
                replyTo: [{ name: fields.name, email: fields.email }],
                subject: `Site contact form: ${fields.name}`,
                bodyValues: { body: { value: fields.message, charset: 'utf-8' } },
                textBody: [{ partId: 'body', type: 'text/plain' }],
              },
            },
          },
          'createDraft',
        ],
        [
          'EmailSubmission/set',
          {
            accountId,
            create: {
              submission: {
                identityId: identity.id,
                '#emailId': {
                  resultOf: 'createDraft',
                  name: 'Email/set',
                  path: '/create/draft/id',
                },
              },
            },
          },
          'submit',
        ],
      ],
    }),
  });
  if (!sendResponse.ok) throw new Error('Failed to send via JMAP');
  const sendResult = (await sendResponse.json()) as {
    methodResponses: [string, Record<string, unknown>, string][];
  };
  const submitResult = sendResult.methodResponses.find((r) => r[2] === 'submit')?.[1] as
    | { notCreated?: Record<string, unknown> }
    | undefined;
  if (submitResult?.notCreated && Object.keys(submitResult.notCreated).length > 0) {
    throw new Error('JMAP submission was rejected');
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_BYTES) {
    return jsonResponse(413, { ok: false });
  }

  let payload: ContactPayload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse(400, { ok: false });
  }

  const { name, email, message, turnstileToken } = payload;
  if (
    !isNonEmptyString(name, MAX_NAME_LENGTH) ||
    !isNonEmptyString(email, MAX_EMAIL_LENGTH) ||
    !isValidEmail(email) ||
    !isNonEmptyString(message, MAX_MESSAGE_LENGTH) ||
    !isNonEmptyString(turnstileToken, 4000)
  ) {
    return jsonResponse(400, { ok: false });
  }

  const clientIp = request.headers.get('CF-Connecting-IP');
  const turnstileValid = await verifyTurnstile(turnstileToken, env.TURNSTILE_SECRET_KEY, clientIp);
  if (!turnstileValid) {
    return jsonResponse(403, { ok: false });
  }

  try {
    await sendViaFastmail(env.FASTMAIL_API_TOKEN, { name, email, message });
  } catch {
    return jsonResponse(502, { ok: false });
  }

  return jsonResponse(200, { ok: true });
};
