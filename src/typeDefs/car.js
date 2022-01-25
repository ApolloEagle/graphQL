const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    cars: [Car]
    car(id: Int!): Car
  }

  type Car {
    id: Int!
    make: String!
    model: String!
    color: String!
    owner: User!
  }

  extend type Mutation {
    createCar(make: String!, model: String!, color: String!): Car!
    deleteCar(id: Int!): Boolean
  }
`;

module.exports = typeDefs;
