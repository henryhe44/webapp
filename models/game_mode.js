'use strict'
module.exports = function(sequelize, DataTypes) {
	var Game_mode = sequelize.define('Game_mode', {
		co-op: DataTypes.STRING,
		ladder: DataTypes.STRING,
    brawl: DataTypes.STRING,
    quick_play: DataTypes.STRING,
    competitive: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	})
