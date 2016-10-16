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

	// Sync and create two test users
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
