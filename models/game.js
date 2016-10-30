'use strict'
module.exports = function(sequelize, DataTypes) {
	var Game = sequelize.define('Game', {
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		genre: DataTypes.STRING,
		rank: DataTypes.ARRAY(DataTypes.STRING),
		attitude: DataTypes.ARRAY(DataTypes.STRING),
		t_m_system: DataTypes.STRING

	}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	})
}
