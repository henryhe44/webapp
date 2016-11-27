'use strict'
module.exports = function(sequelize, DataTypes) {
	var User_Game_Info = sequelize.define('User_Game_Info', {
		summary: DataTypes.TEXT,
		rank: DataTypes.STRING,
		attitude: DataTypes.STRING,
		mode_name: DataTypes.ARRAY(DataTypes.STRING),
		want_improve: DataTypes.BOOLEAN

	}, {
		classMethods: {
			associate: function(models) {
				/*User_Game_Info.hasMany(models.Gamer_Details);	*/		}
		}
	})
	return User_Game_Info;
};
