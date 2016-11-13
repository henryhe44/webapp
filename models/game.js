$'use strict'
module.exports = function(sequelize, DataTypes) {
	var Game = sequelize.define('Game', {
		game_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		classMethods: {
			associate: function(models) {
				/*Game.hasMany(models.User_Game_Info);
                Game.hasMany(models.Gamer_Details);*/
			}
		}
	});
	return Game;
}
