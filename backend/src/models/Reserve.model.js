const { Model, DataTypes } = require('sequelize');

class Reserve extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATEONLY,
      hour: DataTypes.DATE,
      clientId: DataTypes.INTEGER,
      tableId: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
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