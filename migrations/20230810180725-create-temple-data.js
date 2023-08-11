'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('temple_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      t_name: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      gmail: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      found_date: {
        type: Sequelize.STRING
      },
      diety: {
        type: Sequelize.STRING
      },
      pujari: {
        type: Sequelize.STRING
      },
      timing_oc: {
        type: Sequelize.STRING
      },
      photos: {
        type: Sequelize.STRING
      },
      instructions: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      fb: {
        type: Sequelize.STRING
      },
      insta: {
        type: Sequelize.STRING
      },
      gallary: {
        type: Sequelize.STRING
      },
      copyright: {
        type: Sequelize.STRING
      },
      specific: {
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
    await queryInterface.dropTable('temple_data');
  }
};