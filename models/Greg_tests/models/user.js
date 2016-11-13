var Sequelize = require('sequelize');

var connection = new Sequelize("arena_test", "arena", "password", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
});

var User = connection.define('user')