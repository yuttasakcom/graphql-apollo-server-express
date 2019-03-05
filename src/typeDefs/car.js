const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    cars: [Car]
    car(id: Int): Car
  }

  type Car {
    id: ID!
    model: String!
    colour: String!
    owner: User!
  }
`
