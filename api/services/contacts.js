const config = require('./../config')
const nodemailer = require('nodemailer')

console.log(config.email.smtp)
const transport = nodemailer.createTransport(config.email.smtp)

module.exports.getInTouch = async (data) => {
  console.log('Sending mail for data', data)

  const message = {
    from: config.email.sender,
    to: config.email.receiver,
    subject: 'A new form submitted on your website',
    text: JSON.stringify(data, null, 4)
  }

  const info = await transport.sendMail(message)
  console.log('Message sent: %s', info.messageId)
}
