const { sequelize, DataTypes } = require("./db");
const bcrypt = require("bcrypt");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      len: [4, 16],
    },
  },
});

User.prototype.hashPassword = async function () {
  return await bcrypt.hash(this.password, 10);
};

User.prototype.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

User.associate = (models) => {
  User.hasMany(models.Car, { onDelete: "CASCADE" });
};

User.beforeCreate(async (user) => {
  user.password = await user.hashPassword(user.password);
});

module.exports = User;
