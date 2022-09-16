const { User, UserSchema } = require('./user.model');
const { Character, CharacterSchema } = require('./character.model');
const { Gender, GenderSchema } = require('./gender.model');
const { Movie, MovieSchema } = require('./movie.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Character.init(CharacterSchema, Character.config(sequelize));
  Gender.init(GenderSchema, Gender.config(sequelize));
  Movie.init(MovieSchema, Movie.config(sequelize));
}

module.exports = setupModels;
