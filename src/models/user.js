const { sequelize, DataTypes } = require("./db");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
  },
});

User.associate = (models) => {
  User.hasMany(models.Car, { onDelete: "CASCADE" });
};

module.exports = User;
