'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Career_fairs', [{
        host_id: 3,
        venue_id: 2,
        name: "MacroHard Career Meetup",
        date: new Date("August 7, 2021 2:00 PM"),
        capacity: 100
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Career_fairs', null, {});
  }
}
