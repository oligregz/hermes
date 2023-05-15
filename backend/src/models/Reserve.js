const { Model, DataTypes } = require('sequelize');

class Reserve extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATEONLY,
      hour: DataTypes.DATE, 
      created_at: DataTypes.DATE,
      update_at: DataTypes.DATE,
    }, {
      sequelize
    });
  }

}

module.exports = Reserve;