module.exports = {
  Query: {
    me: () => users[0],
    users: (parent, args, { models }) => models.users,
    user: (parent, { id }, { models }) => {
      const user = models.users.filter(user => user.id === id)
      return user[0]
    }
  }
}
