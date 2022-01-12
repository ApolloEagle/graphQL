const express = require("express");
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");
const { users } = require("./data");
const { cars } = require("./data");
const me = users[0];
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: Int!): User
    me: User

    cars: [Car]
    car(id: Int!): Car
  }

  type User {
    id: Int!
    name: String!
    cars: [Car]
  }

  type Car {
    id: Int!
    make: String!
    model: String!
    color: String!
    owner: User!
  }

  type Mutation {
    createUser(id: Int!, name: String!): User!
    deleteUser(id: Int!): Boolean
  }
`;
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => {
      const user = users.filter((user) => user.id === id);
      return user[0];
    },
    cars: () => cars,
    car: (parent, { id }) => {
      const car = cars.filter((car) => car.id === id);
      return car[0];
    },
    me: () => me,
  },
  Car: {
    owner: (parent) => users[parent.ownedBy],
  },
  User: {
    cars: (parent) => parent.cars.map((carId) => cars[carId]),
  },
  Mutation: {
    createUser: (parent, { id, name }) => {
      const user = {
        id,
        name,
      };
      users.push(user);
      return user;
    },
    deleteUser: (parent, { id }) => {
      let exists = false;
      users.filter((user) => {
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

const startApolloServer = async (typeDefs, resolvers) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(3000, () =>
    console.info("Apollo GraphQL server is running on port 3000")
  );
};

startApolloServer(typeDefs, resolvers);
