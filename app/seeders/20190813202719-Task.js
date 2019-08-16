'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */

      return queryInterface.bulkInsert('Tasks', [{
        title: 'Setup for laravel project',
        category : 'laravel',
        url : 'setup-laravel-project',
        description: 'Are you stack in how to setup laravel project? Follow this tutorial to learn how to setup lavarel project and begin your laravel journey.',
        createdAt : new Date(),
        updatedAt : new Date()
      }, {
        title: 'Introduction to ReactJs - Beginners',
        category : 'reactjs',
        url : 'introduction-to-reactjs',
        description: 'ReactJs is the most popular javascript framework for developing user interfaces. It was created by Facebook',
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
