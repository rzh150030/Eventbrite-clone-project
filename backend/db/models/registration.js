'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    career_fair_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Registration.associate = function(models) {
    // associations can be defined here
  };
  return Registration;
};