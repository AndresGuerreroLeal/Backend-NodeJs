const { models } = require('../libs/sequilize');

class CharacterService {
  create() {}

  find() {
    const characters = models.Character.findAll({ include: ['movies'] });
    return characters;
  }

  findOne() {}

  update() {}

  delete() {}
}

module.exports = CharacterService;
