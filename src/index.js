const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const app = express()
const PORT = process.env.PORT || '4000'

const { users, cars } = require('./models')

const typeDefs = require('./typeDefs')

const resolvers = {
  Query: {
    me: () => users[0],
    users: () => users,
    user: (parent, { id }) => {
      const user = users.filter(user => user.id === id)
      return user[0]
    },
    cars: () => cars,
    car: (parent, { id }) => {
      const car = cars.filter(car => car.id === id)
      return car[0]
    },
  },
  Car: {
    owner: parent => {
      return users[parent.owner - 1]
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
