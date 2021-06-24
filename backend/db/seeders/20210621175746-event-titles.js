'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Event_titles', [
        { job_title_id: 42, fair_id: 1},
        { job_title_id: 40, fair_id: 2},
        { job_title_id: 33, fair_id: 3},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Event_titles', null, {});
  }
};
