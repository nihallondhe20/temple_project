'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('donation_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      donation_for: {
        type: Sequelize.INTEGER
      },
      remark: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      payment_type: {
        type: Sequelize.STRING
      },
      cheque_no: {
        type: Sequelize.STRING
      },
      adhar_card: {
        type: Sequelize.STRING
      },
      pan_card: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      comments: {
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
    await queryInterface.dropTable('donation_details');
  }
};