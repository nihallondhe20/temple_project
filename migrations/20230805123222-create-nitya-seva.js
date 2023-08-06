'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nitya_sevas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      seva_name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      diety: {
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
    await queryInterface.dropTable('nitya_sevas');
  }
};