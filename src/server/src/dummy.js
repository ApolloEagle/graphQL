const { sequelize } = require("./models/db");
const models = require("./models");

const createData = async () => {
  await models.User.create(
    {
      name: "Ferguson",
      username: "fergy",
      password: "fergy",
      cars: [
        {
          make: "Ford",
          model: "Bronco",
          color: "white",
        },
      ],
    },
    {
      include: [models.Car],
    }
  );

  await models.User.create(
    {
      name: "Smith",
      username: "smithy",
      password: "smithy",
      cars: [
        {
          make: "Subaru",
          model: "Outback",
          color: "white",
        },
      ],
    },
    {
      include: [models.Car],
    }
  );

  await models.User.create(
    {
      name: "Bjorn",
      username: "bjorny",
      password: "bjorny",
      cars: [
        {
          make: "Fiat",
          model: "124 Spider",
          color: "white",
        },
      ],
    },
    {
      include: [models.Car],
    }
  );
};

sequelize.sync({ force: true }).then(async () => {
  try {
    await createData();
    process.exit();
  } catch (error) {
    console.log("Data Loading Error: ", error);
  }
});
