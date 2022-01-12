const express = require("express");
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");
const users = require("./data").users;
const me = users[0];
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: Int!): User
    me: User
  }

  type User {
    id: Int!
    name: String!
  }
`;
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => {
      const user = users.filter((user) => user.id === id);
      return user[0];
    },
    me: () => me,
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
