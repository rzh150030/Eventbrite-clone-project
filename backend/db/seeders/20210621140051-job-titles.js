'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Job_titles', [
        {title: "Cloud Architect"},
        {title: "Cloud Consultant"},
        {title: "Cloud Services Developer"},
        {title: "Cloud System Engineer"},
        {title: "Cloud System Administrator"},
        {title: "Cloud System Engineer"},
        {title: "Cloud Product and Project Manager"},
        {title: "Computer Network Architect"},
        {title: "Computer Systems Analyst"},
        {title: "Computer Systems Manager"},
        {title: "IT Analyst"},
        {title: "IT Coordinator"},
        {title: "Network Administrator"},
        {title: "Network Architect"},
        {title: "Network and Computer Systems Administrator"},
        {title: "Network Engineer"},
        {title: "Network Systems Administrator"},
        {title: "Senior Network Engineer"},
        {title: "Senior Network Architect"},
        {title: "Senior Network System Administrator"},
        {title: "Telecommunications Specialist"},
        {title: "Data Center Support Specialist"},
        {title: "Data Quality Manager"},
        {title: "Application Support Analyst"},
        {title: "Senior System Analyst"},
        {title: "Systems Analyst"},
        {title: "Systems Designer"},
        {title: "Information Security Analyst"},
        {title: "Information Security Analyst"},
        {title: "Security Specialist"},
        {title: "Senior Security Specialist"},
        {title: "Application Developer"},
        {title: "Associate Developer"},
        {title: "Junior Software Engineer"},
        {title: "Programmer Analyst"},
        {title: "Senior Programmer Analyst"},
        {title: "Senior Software Engineer"},
        {title: "Senior System Architect"},
        {title: "Senior System Designer"},
        {title: "Senior Systems Software Engineer"},
        {title: "Software Architect"},
        {title: "Software Engineer"},
        {title: "Software Quality Assurance Analyst"},
        {title: "System Architect"},
        {title: "Systems Software Engineer"},
        {title: "Front End Developer"},
        {title: "Senior Web Administrator"},
        {title: "Web Developer"}
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Job_titles', null, {});
  }
};
