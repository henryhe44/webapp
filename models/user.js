
module.exports = function(sequelize, DataTypes){

var User = sequelize.define('user', {
	firstName: {
		type: Sequelize.STRING
   },
    lastName: {
         type: Sequelize.STRING
   },
    username: {
    	type: Sequelize.STRING
    },
    email: {
    	type: Sequelize.STRING
   }
});



}

User.sync()



