const { Model, DataTypes } = require('sequelize');

class Client extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      telephone: DataTypes.STRING,
      created_at: DataTypes.DATE,
      update_at: DataTypes.DATE,
    }, {
      sequelize
    });
  }
}

module.exports = Client;
