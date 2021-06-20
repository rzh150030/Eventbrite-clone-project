'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Event_titles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_title_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Job_titles"}
      },
      fair_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Career_fairs"}
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Event_titles');
  }
};
