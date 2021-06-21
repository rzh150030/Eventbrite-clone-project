'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event_title = sequelize.define('Event_title', {
    job_title_id: DataTypes.INTEGER,
    fair_id: DataTypes.INTEGER
  }, {});
  Event_title.associate = function(models) {
    // associations can be defined here
  };
  return Event_title;
};
