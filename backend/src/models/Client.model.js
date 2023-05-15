const { Model, DataTypes } = require('sequelize');

class Client extends Model {
  static init(sequelize) {
    super.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      telephone: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'Client',
      tableName: 'clients',
      underscored: true,
    });
  }

  static associate(models) {
    Client.hasOne(models.Reserve, {
      foreignKey: 'clientId',
      as: 'reserve',
    });
  }
}

module.exports = Client;
