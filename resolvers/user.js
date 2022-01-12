const resolvers = {
  Query: {
    users: (parents, args, { models }) => models.users,
    user: (parent, { id }, { models }) => {
      const user = models.users.filter((user) => user.id === id);
      return user[0];
    },
    me: (parent, args, { me }) => me,
  },
  User: {
    cars: (parent, args, { models }) =>
      parent.cars.map((carId) => models.cars[carId]),
  },
  Mutation: {
    createUser: (parent, { id, name }, { models }) => {
      const user = {
        id,
        name,
      };
      models.users.push(user);
      return user;
    },
    deleteUser: (parent, { id }, { models }) => {
      let exists = false;
      models.users.filter((user) => {
        if (user.id === id) {
          exists = true;
        } else {
          return user;
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
