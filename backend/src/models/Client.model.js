const { Model, DataTypes } = require('sequelize');

class Client extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      telephone: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
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
