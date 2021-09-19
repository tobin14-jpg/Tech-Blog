const { User } = require('../models');

const userData = [
  {
    username: "Chris",
    email: "Chris@gmail.com",
    password: "password1234"
  },
  {
    username: "Larry",
    email: "Larry@gmail.com",
    password: "password1234"
  },
  {
    username: "Susan",
    email: "Susan@gmail.com",
    password: "password1234"
  },
  {
    username: "Nathan",
    email: "Nathan@gmail.com",
    password: "password1234"
  },
  {
    username: "Marissa",
    email: "Marissa@gmail.com",
    password: "123456789"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;