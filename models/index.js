const { sequelize } = require("./db");

const UserModel = sequelize.import("./user");
const CarModel = sequelize.import("./car");

const models = {
  User: UserModel,
  Car: CarModel,
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[keys]) {
    models[key].associate(models);
  }
});

module.export = models;
