'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('donation_fors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      donation_type: {
        type: Sequelize.STRING
      },
      dona_name: {
        type: Sequelize.STRING
      },
      diaty: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      organiser_details: {
        type: Sequelize.STRING
      },
      payment_type: {
        type: Sequelize.STRING
      },
      bank_name: {
        type: Sequelize.STRING
      },
      branch_name: {
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
    await queryInterface.dropTable('donation_fors');
  }
};