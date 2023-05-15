const { Model, DataTypes } = require('sequelize');

class Table extends Model {
  static init(sequelize) {
    super.init({
      capacity: DataTypes.INTEGER,
      busy: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE,
      update_at: DataTypes.DATE,
    }, {
      sequelize
    });
  }
}

module.exports = Table;