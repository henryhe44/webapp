'use strict'
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


User = sequelize.define('user', {})

Game = sequelize.define('game', {})

GamerDetails = sequelize.define('gamerDetails', {
    attitude: DataTypes.STRING,
		rank: DataTypes.STRING,

})

models.User.belongsToMany(models.Game, { through: models.GamerDetails })
models.Game.belongsToMany(models.User, { through: models.GamerDetails })
