'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('donation_forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      gotra: {
        type: Sequelize.STRING
      },
      payment_type: {
        type: Sequelize.STRING
      },
      cheque_no: {
        type: Sequelize.STRING
      },
      bank_name: {
        type: Sequelize.STRING
      },
      branch_name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      transaction_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('donation_forms');
  }
};