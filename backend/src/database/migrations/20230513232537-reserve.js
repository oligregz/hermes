'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('reserve_tb', {
      id: {
        type: Sequelize.INTEGER,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('reserve_tb');
  }
};

// clientId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
//   onUpdate: 'CASCADE',
//   onDelete: 'CASCADE',
//   field: 'client_id',
//   references: {
//     model: 'client_tb',
//     key: 'id',
//   }
// },
// tableId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
//   onUpdate: 'CASCADE',
//   onDelete: 'CASCADE',
//   field: 'table_id',
//   references: {
//     model: 'table_tb',
//     key: 'id',
//   }
// },