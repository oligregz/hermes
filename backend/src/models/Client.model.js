const { Model, DataTypes } = require("sequelize");

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.CHAR,
        cpf: DataTypes.BIGINT,
        telephone: DataTypes.STRING,
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          field: "created_at",
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          field: "updated_at",
        },
      },
      {
        sequelize,
        modelName: "Client",
        tableName: "clients_tb",
        underscored: true,
      }
    );
  }

  static associate(models) {
    Client.hasOne(models.Reserve, {
      foreignKey: "clientId",
      as: "reserve",
    });
  }
}

module.exports = Client;
