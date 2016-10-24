'use strict'
module.exports = function(sequelize, DataTypes) {
	var Profile = sequelize.define('Profile', {
    aboutMe: DataTypes.TEXT,
		alias: DataTypes.STRING,

    //Timezone should look something like +0500, -0100, if we go by UTC
		//We can use the values to offset certain timestamps, refer to the sequelize documentation for more details
		timezone: {
      DataTypes.INTEGER,
      validate: { min: -1200, max: 1400 }
    },

		//We do need geolocation, but should we represent it as longtitude and latitude instead? hrm...
		longtitude: DataTypes.INTEGER,
		latitude: DataTypes.INTEGER,
		games_played: DataTypes.ARRAY(DataTypes.STRING),
    ignore_list: DataTypes.ARRAY(DataTypes.STRING),
    friends_list: DataTypes.ARRAY(DataTypes.STRING):
	}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	})
