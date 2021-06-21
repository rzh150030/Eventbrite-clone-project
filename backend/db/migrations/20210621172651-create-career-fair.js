'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Career_fairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      host_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      venue_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Venues"}
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      capacity: {
        allowNull: false,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Career_fairs');
  }
};
