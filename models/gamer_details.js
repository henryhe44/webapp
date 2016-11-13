'use strict'
module.exports = function(sequelize, DataTypes) {
	var Gamer_Detail = sequelize.define('Gamer_Detail', {

	
}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	});
		return Gamer_Detail;
};
