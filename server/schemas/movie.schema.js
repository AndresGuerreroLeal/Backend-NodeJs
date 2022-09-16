const Joi = require('joi');

const id = Joi.string().uuid();
const title = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const qualification = Joi.number().min(1).max(5);

const createMovieSchema = Joi.object({
  title: title.required(),
  image: image.required(),
  qualification: qualification.required(),
});

const updateMovieSchema = Joi.object({
  title,
  image,
  qualification,
});

const getMovieSchema = Joi.object({
  id: id.required(),
});

module.exports = { createMovieSchema, updateMovieSchema, getMovieSchema };
