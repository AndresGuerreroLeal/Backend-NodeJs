const router = require('express').Router();

const UserService = require('../services/auth.service');
const validatorHandler = require('../middleware/validator.handler');
const { createUserSchema } = require('../schemas/user.schema');

const service = new UserService();

router.get('/login', (req, res) => {});
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
