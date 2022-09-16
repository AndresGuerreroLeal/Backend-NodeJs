const router = require('express').Router();

const validatorHandler = require('../middleware/validator.handler');
const {
  createMovieSchema,
  updateMovieSchema,
  getMovieSchema,
} = require('../schemas/movie.schema');

router.get('/', async (req, res) => {});
router.post('/', validatorHandler(createMovieSchema, 'body'), (req, res) => {});
router.get('/:id', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;
