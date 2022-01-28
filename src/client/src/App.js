import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import User from "./user";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <User />
  </ApolloProvider>
);

export default App;
