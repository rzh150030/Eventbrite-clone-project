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
    Career_fair.belongsToMany(models.Job_title, {through: "Event_title", otherKey: "job_title_id", foreignKey: "fair_id"});
    Career_fair.belongsTo(models.User, {foreignKey: "host_id"});
    Career_fair.belongsTo(models.Venue, {foreignKey: "venue_id"});
  };
  return Career_fair;
};
