const router = require('express').Router();

const CharacterService = require('../services/character.service');
const validatorHandler = require('../middleware/validator.handler');
const {} = require('../schemas/character.schema');

const service = new CharacterService();

router.get('/', async (req, res, next) => {
  // eslint-disable-next-line prefer-const
  let options = {
    include: ['movies'],
    where: {},
  };

  const { name, age, movies } = req.query;
  if (name) {
    options.where.name = name;
  }

  if (age) {
    options.where.age = age;
  }

  if (movies) {
    options.include[0] = {
      association: 'movies',
      as: 'movies',
      where: { id: movies },
    };
  }

  const allCharacters = await service.find(options);
  res.json(allCharacters);
});
router.post('/', async (req, res, next) => {
  try {
    const { body } = req;
    const newCharacter = await service.create(body);
    res.json(newCharacter);
  } catch (error) {
    next(error);
  }
});
router.get('/:id', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;
