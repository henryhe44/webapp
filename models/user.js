var Sequelize = require('sequelize')
var connection = new Sequelize('arena_test', 'arena', 'password', {
	host: 'localhost',
	dialect: 'postgres'
});

connection
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

var User = connection.define('user', {
		firstName: {
			type: Sequelize.STRING
   	},
    lastName: {
      type: Sequelize.STRING
   	},
  	username: {
    	type: Sequelize.STRING
    },
    email: {
    	type: Sequelize.STRING
   	},
		password: {
			type: Sequelize.STRING
		}
});
connection.sync({
	force: true,
	logging: console.log
});
module.exports = User;
