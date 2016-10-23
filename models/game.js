'use strict'
module.exports = function(sequelize, DataTypes) {
	var Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    //Actually, should logo even be in the database?
    logo: DataTypes.TEXT,
    genre: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	})
