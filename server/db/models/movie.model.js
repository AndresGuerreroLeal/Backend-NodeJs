const { Model, DataTypes, Sequelize } = require('sequelize');

const MOVIE_TABLE = 'movies';

const MovieSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  image: { allowNull: false, type: DataTypes.STRING },
  title: { allowNull: false, type: DataTypes.STRING },
  qualification: { allowNull: false, type: DataTypes.NUMBER },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Movie extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIE_TABLE,
      modelName: 'Movie',
      timestamps: false,
    };
  }
}

module.exports = { MOVIE_TABLE, MovieSchema, Movie };
