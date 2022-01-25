const { sequelize } = require("./models/db");
const models = require("./models");

const createData = async () => {
  await models.User.create(
    {
      name: "Ferguson",
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
