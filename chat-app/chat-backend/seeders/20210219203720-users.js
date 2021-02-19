"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@email.com",
        password: "secret",
        gender: "male",
      },
      {
        firstName: "John",
        lastName: "Smith",
        email: "john.Smith@email.com",
        password: "secret",
        gender: "male",
      },
      {
        firstName: "Bat",
        lastName: "Mann",
        email: "bat.mann@email.com",
        password: "secret",
        gender: "male",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
