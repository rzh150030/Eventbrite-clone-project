'use strict';
module.exports = (sequelize, DataTypes) => {
  const Career_fair = sequelize.define('Career_fair', {
    host_id: DataTypes.INTEGER,
    venue_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    capacity: DataTypes.INTEGER
  }, {});
  Career_fair.associate = function(models) {
    // associations can be defined here
  };
  return Career_fair;
};