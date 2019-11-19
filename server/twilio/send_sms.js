const twilioInfo = require('./config.js');

const accountSid = twilioInfo.accountSid;
const authToken = twilioInfo.authToken;
const twilioPhone = twilioInfo.twilioPhone;
const client = require('twilio')(accountSid, authToken);

const texter = (phoneNumber, firstName, score) => {
  return client.messages
    .create({
      body: `Just a heads up: ${firstName}'s homework is ${score}. Thanks for checking in on them later!`,
      from: twilioPhone,
      to: phoneNumber // E164 format: [+][country code][phone number including area code]
    })
    .then(message => console.log(message.sid));
}

module.exports = texter;