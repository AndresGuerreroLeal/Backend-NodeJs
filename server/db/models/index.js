const { User, UserSchema } = require('./user.model');
const { Character, CharacterSchema } = require('./character.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Character.init(CharacterSchema, Character.config(sequelize));
}

module.exports = setupModels;
