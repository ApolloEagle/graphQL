const { DataTypes, Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_HOST,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "mysql",
    operatorAliases: false,
    define: {
      timestamps: false,
    },
  }
);

module.exports = {
  sequelize,
  DataTypes,
};
