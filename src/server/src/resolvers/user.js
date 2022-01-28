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
    register: async (parent, { name, username, password }, { models }) => {
      const user = {
        name,
        username,
        password,
      };
      const registeredUser = await models.User.create(user);
      try {
        return typeof registeredUser.id === "number" ? true : false;
      } catch (error) {
        console.log("Register user error", error);
        return false;
      }
    },
  },
};

module.exports = resolvers;
