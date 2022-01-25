const resolvers = {
  Query: {
    cars: (parent, args, { models }) => models.Car.findAll(),
    car: (parent, { id }, { models }) => {
      return models.Car.findByPk(id);
    },
  },
  Car: {
    owner: (parent) => models.User.findByPk(parent.userId),
  },
  Mutation: {
    createCar: (parent, { make, model, color }, { models }) => {
      let car = {
        make,
        model,
        color,
      };
      return models.Car.create(car);
    },
    deleteCar: (parent, { id }, { models }) => {
      return models.Car.destroy({
        where: {
          id,
        },
      });
    },
  },
};

module.exports = resolvers;
