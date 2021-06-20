'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job_title = sequelize.define('Job_title', {
    title: DataTypes.STRING
  }, {});
  Job_title.associate = function(models) {
    // associations can be defined here
  };
  return Job_title;
};