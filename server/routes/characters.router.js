const router = require('express').Router();

const CharacterService = require('../services/character.service');
const validatorHandler = require('../middleware/validator.handler');
const {} = require('../schemas/character.schema');

const service = new CharacterService();

router.get('/', async (req, res, next) => {
  try {
    const characters = await service.find();
    res.json(characters);
  } catch (error) {
    next(error);
  }
});
router.post('/', (req, res) => {});
router.get('/:id', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;
