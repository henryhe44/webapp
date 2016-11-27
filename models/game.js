$'use strict'
module.exports = function(sequelize, DataTypes) {
	var Game = sequelize.define('Game', {
		game_name: {
			type: DataTypes.STRING

	}, {
		classMethods: {
			associate: function(models) {
				models.Game.belongsToMany(models.User, {through: models.GamerDetail})
			}
		}
	});
	return Game;
}
