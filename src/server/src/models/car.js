const { sequelize, DataTypes } = require("./db");

const Car = sequelize.define("Car", {
  make: {
    type: DataTypes.STRING,
  },
  model: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
});

Car.associate = (models) => {
  Car.belongsTo(models.User);
};

module.exports = Car;
