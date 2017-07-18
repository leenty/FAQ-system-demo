'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('questions', [{
      title: 'this is first title',
      content: 'this is first content',
      class_id: 1
    },
    {
      title: 'this is title 2',
      content: 'this is content 2',
      class_id: 1
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
