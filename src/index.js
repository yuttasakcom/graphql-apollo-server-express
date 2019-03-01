const { resolve } = require('path')
const { readFileSync } = require('fs')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const app = express()
const PORT = process.env.PORT || '4000'

const filePath = resolve(__dirname, './graphql/schema/typeDefs.gql')
const typeDefs = readFileSync(filePath, 'utf-8')

const resolvers = require('./graphql/resolvers/resolver')

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
