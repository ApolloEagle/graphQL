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
    username: String!
    cars: [Car]
  }

  type Token {
    token: String!
  }

  extend type Mutation {
    createUser(name: String!): User!
    deleteUser(id: Int!): Boolean
    register(name: String!, username: String!, password: String!): Boolean!
    login(username: String!, password: String!): Token!
  }
`;

module.exports = typeDefs;
