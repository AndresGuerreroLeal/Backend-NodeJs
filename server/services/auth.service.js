const boom = require('@hapi/boom');
const nodemailer = require('nodemailer');
const { models } = require('../libs/sequilize');
const { config } = require('../config/config');

class AuthService {
  login() {}

  async register(body) {
    const rta = await models.User.create(body);
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: config.email,
        pass: config.password,
      },
    });

    await transporter.sendMail({
      from: `${config.email}`,
      to: `${rta.email}`,
      subject: 'Hello, you just signed up for DisneyApp movies. ✔',
      html: 'Your registration was successful, thank you for joining this great family.',
    });

    return rta;
  }
}

module.exports = AuthService;
