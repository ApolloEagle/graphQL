const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    users: [User]
    user(id: Int!): User
    me: User
  }

  type User {
    id: Int!
    name: String!
    cars: [Car]
  }

  extend type Mutation {
    createUser(name: String!): User!
    deleteUser(id: Int!): Boolean
  }
`;

module.exports = typeDefs;
