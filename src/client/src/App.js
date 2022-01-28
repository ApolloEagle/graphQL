import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ReadUser, CreateUser } from "./components";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <ReadUser />
    <CreateUser />
  </ApolloProvider>
);

export default App;
