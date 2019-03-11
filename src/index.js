const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const app = express()
const PORT = process.env.PORT || '4000'

const models = require('./models')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers, context: { models } })
server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
