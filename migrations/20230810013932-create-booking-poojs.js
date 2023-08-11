'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_poojs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      timing: {
        type: Sequelize.STRING
      },
      pay_type: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      customer_name: {
        type: Sequelize.STRING
      },
      cust_id: {
        type: Sequelize.STRING
      },
      poojari_name: {
        type: Sequelize.STRING
      },
      pooja_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking_poojs');
  }
};