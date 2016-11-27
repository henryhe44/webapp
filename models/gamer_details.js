'use strict'
module.exports = function(sequelize, DataTypes) {
	var GamerDetail = sequelize.define('GamerDetail', {
		summary: {
			type: DataTypes.TEXT,
		},
		rank: { 
			type: DataTypes.STRING,
		}
		attitude: {
			type: DataTypes.STRING,
		} 
		mode_name: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		}
		
		want_improve: {
			type: DataTypes.BOOLEAN
		}

	
}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	});
		return GamerDetail;
};
