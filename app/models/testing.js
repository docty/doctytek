'use strict';
module.exports = (sequelize, DataTypes) => {
  const Testing = sequelize.define('Testing', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Testing.associate = function(models) {
    // associations can be defined here
  };
  return Testing;
};