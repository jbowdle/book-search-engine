const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
  },
}

module.exports = resolvers;