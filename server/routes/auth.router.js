const router = require('express').Router();

const passport = require('passport');

const UserService = require('../services/auth.service');
const validatorHandler = require('../middleware/validator.handler');
const { createUserSchema } = require('../schemas/user.schema');

const service = new UserService();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      delete req.user.dataValues.password;
      res.json(req.user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/register',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req;
      const user = await service.register(body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
