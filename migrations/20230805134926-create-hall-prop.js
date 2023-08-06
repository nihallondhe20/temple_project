'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hall_props', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      lastName: {
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
      event_name: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      hall_name: {
        type: Sequelize.STRING
      },
      timing: {
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
    await queryInterface.dropTable('hall_props');
  }
};