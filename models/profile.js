'use strict'
module.exports = function(sequelize, DataTypes) {
	var Profile = sequelize.define('Profile', {
    		aboutMe: DataTypes.TEXT,
		country: DataTypes.STRING,
		favored_genre: DataTypes.STRING,
		//Alternatively, schedule can just be text for user to fill in, if complications arises
		schedule: DataTypes.ARRAY(DataTypes.DATE)
	}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	})
