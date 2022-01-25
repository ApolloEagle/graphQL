const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const models = require("./models");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const startApolloServer = async (models, typeDefs, resolvers) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      models,
    },
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(3000, () =>
    console.info("Apollo GraphQL server is running on port 3000")
  );
};

startApolloServer(models, typeDefs, resolvers);
