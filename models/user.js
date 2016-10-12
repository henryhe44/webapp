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

var User = connection.define('user', {
	firstName: { 
		type: Sequelize.STRING
   },
    lastName: {
         type: Sequelize.STRING
   },
    username: {
    	type: Sequelize.STRING
    } 
    email: {
    	type: Sequelize.STRING
   },


});