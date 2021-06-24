'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Venues', [
        {
          name: "The Xfinity Center",
          address: "885 S Main St, Mansfield",
          city: "Mansfield",
          country: "US",
          zipCode: "02048"
        },
        {
          name: "George R. Brown Convention Center",
          address: "1001 Avenida De Las Americas",
          city: "Houston",
          country: "US",
          zipCode: "77010"
        },
        {
          name: "Leicester Careers Fair",
          address: "The City Rooms,10 Hotel Street",
          city: "Leicester",
          country: "UK",
          zipCode: "LE1 5AW"
        },
        {
          name: "Giganteum",
          address: "Willy Brandts Vej 31",
          city: "Aalborg",
          country: "Denmark",
          zipCode: "9220 Aalborg Øst"
        },
        {
          name: "Zénith de Caen",
          address: "Rue Joseph Philippon",
          city: "Caen",
          country: "France",
          zipCode: "14000"
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Venues', null, {});
  }
};
