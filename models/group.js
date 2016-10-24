'use strict'
module.exports = function(sequelize, DataTypes) {
	var Group = sequelize.define('Group', {
    group_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    //Perhaps announcement should be an array?
    announcement: DataTypes.TEXT,
    member_count: DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				// creates associations between models
			}
		}
	})
