const { Model, DataTypes } = require('sequelize');

class Table extends Model {
  static init(sequelize) {
    super.init({
      capacity: DataTypes.INTEGER,
      busy: DataTypes.BOOLEAN,
    }, {
      sequelize,
      modelName: 'Table',
      tableName: 'tables_tb',
      underscored: true,
    });
  }

  static associate(models) {
    Table.hasOne(models.Reserve, {
      foreignKey: 'tableId',
      as: 'reserve',
      onDelete: 'CASCADE',
    });
  }
}

module.exports = Table;