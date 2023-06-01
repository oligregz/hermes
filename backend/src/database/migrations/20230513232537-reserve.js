'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('reserves_tb', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      hour: {
        type: Sequelize.DATE,
        allowNull: false
      },
      clientId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'client_id',
        references: {
          model: 'clients_tb',
          key: 'id',
        }
      },
      tableId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'table_id',
        references: {
          model: 'tables_tb',
          key: 'id',
        }
      },
    });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('reserves_tb');
  }
};
