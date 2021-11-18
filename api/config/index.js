module.exports = {
  email: {
    sender: process.env.EMAIL_SENDER,
    receiver: process.env.EMAIL_RECEIVER,
    smtp: {
      host: process.env.EMAIL_SMTP_HOSTNAME,
      port: parseInt(process.env.EMAIL_SMTP_PORT),
      auth: {
        user: process.env.EMAIL_SMTP_AUTH_USERNAME,
        pass: process.env.EMAIL_SMTP_AUTH_PASSWORD
      }
    }
  }
}
