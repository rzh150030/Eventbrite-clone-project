'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    zipCode: DataTypes.INTEGER
  }, {});
  Venue.associate = function(models) {
    // associations can be defined here
  };
  return Venue;
};