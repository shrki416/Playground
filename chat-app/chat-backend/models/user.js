"use strict";
const bcrypt = require("bcrypt");
const config = require("../config/app");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      avatar: {
        type: DataTypes.STRING,
        get() {
          const avatar = this.getDataValue("avatar");
          const url = `${config.appUrl}:${config.appPort}`;
          if (!avatar) {
            return `${url}/${this.getDataValue("gender")}.svg`;
          }
          const id = this.getDataValue("id");
          return `${url}/user/${id}/${avatar}`;
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: hashedPassword,
        beforeUpdate: hashedPassword,
      },
    }
  );
  return User;
};

const hashedPassword = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  return user;
};
