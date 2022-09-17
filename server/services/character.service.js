const { models } = require('../libs/sequilize');

class CharacterService {
  async create(data) {
    const newCharacter = models.Character.create(data);
    return newCharacter;
  }

  find() {
    const characters = models.Character.findAll({ include: ['movies'] });
    return characters;
  }

  findOne() {}

  update() {}

  delete() {}
}

module.exports = CharacterService;
