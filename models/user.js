
module.exports = function(sequelize, DataTypes){

var User = sequelize.define('user', {
	firstName: {
		type: DataTypes.STRING
   },
    lastName: {
         type: DataTypes.STRING
   },
    username: {
    	type: DataTypes.STRING
    },
    email: {
    	type: DataTypes.STRING
   }
});



}

User.sync()



