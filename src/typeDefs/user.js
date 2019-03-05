const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    me: User
    users: [User]
    user(id: Int): User
  }

  type User {
    id: ID!
    name: String!
  }
`
