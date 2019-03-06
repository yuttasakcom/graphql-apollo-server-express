module.exports = {
  Query: {
    cars: (parent, args, { models }) => models.cars,
    car: (parent, { id }, { models }) => {
      const car = models.cars.filter(car => car.id === id)
      return car[0]
    }
  },
  Car: {
    owner: (parent, args, { models }) => {
      return models.users[parent.owner - 1]
    }
  }
}
