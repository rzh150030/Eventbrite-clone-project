'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Event_titles', [{
        job_title_id: 42,
        fair_id: 1
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Event_titles', null, {});
  }
};
