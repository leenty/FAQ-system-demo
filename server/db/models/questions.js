'use strict';
module.exports = function(sequelize, DataTypes) {
  var questions = sequelize.define('questions', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    class_id: DataTypes.INTEGER,
    views: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return questions;
};