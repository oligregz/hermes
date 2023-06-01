const { Model, DataTypes } = require('sequelize');

class Reserve extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATEONLY,
      hour: DataTypes.DATE,
      clientId: DataTypes.BIGINT,
      tableId: DataTypes.BIGINT,
    }, {
      sequelize,
      modelName: 'Reserve',
      tableName: 'reserves_tb',
      underscored: true,
    });
  }

  static associate(models) {
    Reserve.belongsTo(models.Client, {
      foreignKey: 'clientId',
      as: 'clients_tb',
    });

    Reserve.belongsTo(models.Table, {
      foreignKey: 'tableId',
      as: 'tables_tb',
      onDelete: 'CASCADE',
    });
  }
}

module.exports = Reserve;