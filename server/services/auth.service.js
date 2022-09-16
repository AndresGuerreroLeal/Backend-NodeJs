const boom = require('@hapi/boom');
const { models } = require('../libs/sequilize');

class AuthService {
  login() {}

  async register(body) {
    const rta = await models.User.create(body);
    return rta;
  }
}

module.exports = AuthService;
