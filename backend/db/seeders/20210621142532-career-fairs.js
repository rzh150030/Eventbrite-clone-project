/* 'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Career_fairs', [{
        host_id: 3,
        venue_id: 2,
        job_title: [
          {
            title: "Software Engineer",
            Event_titles: {
              job_title_id: 4,
              fair_id: 1
            }
          }
        ],
        name: "MacroHard Career Meetup",
        date: "Sat, August 7, 2021 2:00 PM",
        capacity: 100
      }], {});

  },

  down: (queryInterface, Sequelize) => {

  }
}; */
