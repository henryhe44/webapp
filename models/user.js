'use strict'
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {

		username: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING, 
		country: DataTypes.STRING,
		about_me: DataTypes.TEXT,
		favored_genre: DataTypes.ARRAY(DataTypes.STRING),
		esports_fan: DataTypes.BOOLEAN

}, {
		classMethods: {
			associate: function(models) {
				/*User.hasOne(models.Gamer_Details);*/
			}
		}
	});
		return User;
};
