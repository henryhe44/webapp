var Sequelize = require('sequelize')
var connection = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  var gameProfile = connection.define('gameProfile', {
     summary: {
     	type: Sequelize.TEXT
     }

  })