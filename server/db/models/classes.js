'use strict';
module.exports = function(sequelize, DataTypes) {
  var classes = sequelize.define('classes', {
    name: DataTypes.STRING,
    sup_class_id: DataTypes.INTEGER,
    group: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return classes;
};