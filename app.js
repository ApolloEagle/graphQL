const express = require("express");
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");
const { start } = require("repl");

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    name: String!
  }
`;
const resolvers = {
  Query: {
    me: () => {
      return {
        name: "Ferguson",
      };
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
