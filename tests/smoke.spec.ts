import { test, expect } from '@playwright/test';

test('home page renders identity, links, theme toggle, and contact form', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Viraj Chitnis' })).toBeVisible();
  await expect(page.getByText('Senior Software Engineer based in the New York City area.')).toBeVisible();

  const githubLink = page.getByRole('link', { name: /GitHub/ });
  await expect(githubLink).toHaveAttribute('href', 'https://github.com/virajchitnis');

  const linkedinLink = page.getByRole('link', { name: /LinkedIn/ });
  await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/viraj-chitnis-ba605894');

  const html = page.locator('html');
  const themeBefore = await html.getAttribute('data-theme');
  await page.getByRole('button', { name: 'Toggle color theme' }).click();
  await expect(html).not.toHaveAttribute('data-theme', themeBefore ?? '');

  const nameInput = page.locator('#name');
  const emailInput = page.locator('#email');
  const messageInput = page.locator('#message');
  const submitButton = page.getByRole('button', { name: 'Send message' });

  const contactLink = page.getByRole('link', { name: 'Get in touch' });

  await expect(nameInput).toBeHidden();
  await contactLink.click();
  await expect(nameInput).toBeVisible();

  await contactLink.click();
  await expect(nameInput).toBeHidden();

  await contactLink.click();
  await expect(nameInput).toBeVisible();

  await submitButton.click();
  await expect(nameInput).toHaveJSProperty('validity.valueMissing', true);

  let requestReceived = false;
  await page.route('**/api/contact', async (route) => {
    requestReceived = true;
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) });
  });

  await nameInput.fill('Test User');
  await emailInput.fill('test@example.com');
  await messageInput.fill('Hello from the smoke test.');
  await submitButton.click();

  await expect(page.getByText("Thanks — I'll get back to you soon.")).toBeVisible();
  expect(requestReceived).toBe(true);
});
