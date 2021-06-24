'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Career_fairs', [
        {host_id: 3, venue_id: 2, name: "MacroHard Career Meetup", date: new Date("August 7, 2021 2:00 PM"), capacity: 100},
        {host_id: 4, venue_id: 1, name: "Moogle's Annual Job Fair 2021", date: new Date("December 7, 2021 11:00 AM"), capacity: 500},
        {host_id: 2, venue_id: 5, name: "Software Engineering Event", date: new Date("January 20, 2022 1:00 PM"), capacity: 500}
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Career_fairs', null, {});
  }
}
