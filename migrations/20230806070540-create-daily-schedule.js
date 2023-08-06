'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('daily_schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_name: {
        type: Sequelize.STRING
      },
      select_user: {
        type: Sequelize.STRING
      },
      others: {
        type: Sequelize.STRING
      },
      a12m: {
        type: Sequelize.STRING
      },
      a1m: {
        type: Sequelize.STRING
      },
      a2m: {
        type: Sequelize.STRING
      },
      a3m: {
        type: Sequelize.STRING
      },
      a4m: {
        type: Sequelize.STRING
      },
      a5m: {
        type: Sequelize.STRING
      },
      a6m: {
        type: Sequelize.STRING
      },
      a7m: {
        type: Sequelize.STRING
      },
      a8m: {
        type: Sequelize.STRING
      },
      a9m: {
        type: Sequelize.STRING
      },
      a10m: {
        type: Sequelize.STRING
      },
      a11m: {
        type: Sequelize.STRING
      },
      p12m: {
        type: Sequelize.STRING
      },
      p1m: {
        type: Sequelize.STRING
      },
      p2m: {
        type: Sequelize.STRING
      },
      p3m: {
        type: Sequelize.STRING
      },
      p4m: {
        type: Sequelize.STRING
      },
      p5m: {
        type: Sequelize.STRING
      },
      p6m: {
        type: Sequelize.STRING
      },
      p7m: {
        type: Sequelize.STRING
      },
      p8m: {
        type: Sequelize.STRING
      },
      p9m: {
        type: Sequelize.STRING
      },
      p10m: {
        type: Sequelize.STRING
      },
      p11m: {
        type: Sequelize.STRING
      },
      p12m: {
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
    await queryInterface.dropTable('daily_schedules');
  }
};