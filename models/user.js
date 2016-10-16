'use strict'

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	})
	User.sync({force: true}).then(function() {
		return User.create({
			firstName: 'Donald',
			lastName: 'Trump',
			username: 'makemegreatagain',
			email: 'makemegreatagain@god.com',
			password: 'chinasux'
		})
	})
	User.sync({force: true}).then(function() {
		return User.create({
			firstName: 'Hillary',
			lastName: 'Clinton',
			username: 'dontvoteforcrazy',
			email: 'imthesaneone@usa.org',
			password: 'iwillruletheworld'
		})
	})
	User.findAll().then(function(users) {
		console.log(users)
	})
		return User;
}

var Sequelize = require('sequelize')
var connection = new Sequelize('arena_test', 'node', 'password', {
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
   }
});
connection.sync({
	logging: console.log
});
