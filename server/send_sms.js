const twilioInfo = require('./config.js');

const accountSid = twilioInfo.accountSid;
const authToken = twilioInfo.authToken;
const twilioPhone = twilioInfo.twilioPhone;
const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: twilioPhone,
     to: '+14025987648' // E164 format: [+][country code][phone number including area code]
   })
  .then(message => console.log(message.sid));