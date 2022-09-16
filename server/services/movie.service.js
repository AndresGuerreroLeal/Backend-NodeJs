const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class MovieService {
  constructor() {
    this.movies = [];
  }

  async create(data) {
    const newProduct = {
      id: '1',
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.movies.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('movie not found');
    }
    const movie = this.movies[index];
    this.movies[index] = {
      ...movie,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.movies.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('movie not found');
    }
    this.movies.splice(index, 1);
    return { id };
  }
}

module.exports = MovieService;
