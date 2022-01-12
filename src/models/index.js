const UserModel = require("./user");
const CarModel = require("./car");

const models = {
  User: UserModel,
  Car: CarModel,
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.export = models;
