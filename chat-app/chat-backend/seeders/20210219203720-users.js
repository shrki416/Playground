"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@email.com",
        password: bcrypt.hashSync("secrets", 10),
        gender: "male",
      },
      {
        firstName: "John",
        lastName: "Smith",
        email: "john.Smith@email.com",
        password: bcrypt.hashSync("secret", 10),
        gender: "male",
      },
      {
        firstName: "Bat",
        lastName: "Mann",
        email: "bat.mann@email.com",
        password: bcrypt.hashSync("secret1", 10),
        gender: "male",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
