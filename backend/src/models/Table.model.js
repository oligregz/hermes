const { Model, DataTypes } = require('sequelize');

class Table extends Model {
  static init(sequelize) {
    super.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      capacity: DataTypes.INTEGER,
      busy: DataTypes.BOOLEAN,
    }, {
      sequelize,
      modelName: 'Table',
      tableName: 'tables',
      underscored: true,
    });
  }

  static associate(models) {
    Table.hasOne(models.Reserve, {
      foreignKey: 'tableId',
      as: 'reserve',
    });
  }
}

module.exports = Table;