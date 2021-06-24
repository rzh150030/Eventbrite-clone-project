'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job_title = sequelize.define('Job_title', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 255]
      }
    }
  }, {});
  Job_title.associate = function(models) {
    Job_title.belongsToMany(models.Career_fair, {through: "Event_title", otherKey: "fair_id", foreignKey: "job_title_id"})
  };
  return Job_title;
};
