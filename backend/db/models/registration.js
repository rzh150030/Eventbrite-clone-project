'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    career_fair_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Registration.associate = function(models) {
    Registration.belongsTo(models.User, {foreignKey: "user_id"});
    Registration.belongsTo(models.Career_fair, {foreignKey: "career_fair_id"})
  };
  return Registration;
};
