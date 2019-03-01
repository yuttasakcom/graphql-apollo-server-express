const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const app = express()
const PORT = process.env.PORT || '4000'

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL',
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
