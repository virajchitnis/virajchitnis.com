const uuidV4 = require('uuid/v4');
const crypto = require('crypto');
const Mailgun = require('mailgun-js');

module.exports = newDevice;

function newDevice(cookie, userAgent, name, res, mailgunKey) {
  if (!cookie) {
    if (mailgunKey != '') {
      const currDate = new Date(Date.now()).toUTCString();
      const mailgun = new Mailgun({apiKey: mailgunKey, domain: 'virajchitnis.com'});
      var mailgun_data = {
        from: 'no-reply@virajchitnis.com',
        to: 'chitnisviraj@gmail.com',
        subject: 'New device logged in at ' + currDate,
        html: '<p>New device logged in using the API key at <b>' + currDate + '</b>.</p><p>The user-agent of the device is: <b>' + userAgent + '</b>.</p><p>The IP address of the device is: <b>' +  + '</b></p>'
      }
      mailgun.messages().send(mailgun_data, function (err, body) {
        if (err) {
          console.error("got an error: ", err);
        }
        else {
          console.log(body);
        }
      });
    }

    hmac = crypto.createHmac('sha1', uuidV4());
    hmac.update(userAgent);
    computedSig = hmac.digest('hex');
    res.cookie(name, computedSig, {
      signed: true,
      maxAge: 31536000000
    });
  }
}
