const { Model, DataTypes } = require('sequelize');

class Reserve extends Model {
  static init(sequelize) {
    super.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      date: DataTypes.DATEONLY,
      hour: DataTypes.DATE,
      clientId: DataTypes.INTEGER,
      tableId: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'Reserve',
      tableName: 'reservations',
      underscored: true,
    });
  }

  static associate(models) {
    Reserve.belongsTo(models.Client, {
      foreignKey: 'clientId',
      as: 'clients',
    });

    Reserve.belongsTo(models.Table, {
      foreignKey: 'tableId',
      as: 'tables',
    });
  }
}

module.exports = Reserve;