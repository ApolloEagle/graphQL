const resolvers = {
  Query: {
    users: (parents, args, { models }) => models.User.findAll(),
    user: (parent, { id }, { models }) => {
      return models.User.findByPk(id);
    },
  },
  User: {
    cars: (parent, args, { models }) =>
      models.Car.findAll({
        where: {
          userId: parent.id,
        },
      }),
  },
  Mutation: {
    createUser: (parent, { name }, { models }) => {
      const user = {
        name,
      };
      return models.User.create(user);
    },
    deleteUser: (parent, { id }, { models }) => {
      return models.User.destroy({
        where: {
          id,
        },
      });
    },
  },
};

module.exports = resolvers;
