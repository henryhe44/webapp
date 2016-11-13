'use strict'
module.exports = function(sequelize, DataTypes) {
	var User_Game_Info = sequelize.define('User_Game_Info', {
		summary: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		rank: {
			type: DataTypes.STRING,
			allowNull: true
		},
		attitude: {
			type: DataTypes.STRING,
			allowNull: true
		},
		mode_name: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: true
		},
		want_improve: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}

	}, {
		classMethods: {
			associate: function(models) {
				/*User_Game_Info.hasMany(models.Gamer_Details);*/			}
		}
	});
	return User_Game_Info;
};
