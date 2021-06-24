'use strict';
module.exports = (sequelize, DataTypes) => {
  const Career_fair = sequelize.define('Career_fair', {
    host_id: DataTypes.INTEGER,
    venue_id: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    date: DataTypes.DATE,
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Career_fair.associate = function(models) {
    Career_fair.belongsToMany(models.Job_title, {through: "Event_title", otherKey: "job_title_id", foreignKey: "fair_id"});
    Career_fair.belongsTo(models.User, {foreignKey: "host_id"});
    Career_fair.belongsTo(models.Venue, {foreignKey: "venue_id"});
    Career_fair.hasMany(models.Registration, {foreignKey: "career_fair_id"});
  };
  return Career_fair;
};
