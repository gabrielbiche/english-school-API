'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clazzes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clazzes.init({
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Clazzes',
  });
  return Clazzes;
};