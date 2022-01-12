const resolvers = {
  Query: {
    cars: (parent, args, { models }) => models.cars,
    car: (parent, { id }, { models }) => {
      const car = models.cars.filter((car) => car.id === id);
      return car[0];
    },
  },
  Car: {
    owner: (parent) => users[parent.ownedBy],
  },
  Mutation: {
    createCar: (parent, { id, make, model, color }, { models }) => {
      let car = {
        id,
        make,
        model,
        color,
      };
      models.cars.push(car);
      return car;
    },
    deleteCar: (parent, { id }, { models }) => {
      let exists = false;
      models.cars.filter((car) => {
        if (car.id === id) {
          exists = true;
        } else {
          return car;
        }
      });
      if (exists) {
        return true;
      } else {
        return false;
      }
    },
  },
};

module.exports = resolvers;
