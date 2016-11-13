'use strict'
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {

		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlphanumeric: true,
				len:[5,20]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				min: 5,
				isAlphanumeric: true
			}
		}, 
		country: {
			type: DataTypes.STRING,
			allowNull: true
		},
		about_me: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		favored_genre: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: true
		},
		esports_fan: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}

}, {
		classMethods: {
			associate: function(models) {
				/*User.hasOne(models.Gamer_Details);*/
			}
		}
	});
		return User;
};
