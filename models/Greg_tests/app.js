var Sequelize = require('sequelize');

var connection = new Sequelize("mydb", "Greg", "pass", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
});

var User = connection.define('user',{
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  country: Sequelize.STRING,
  preffered_genres: Sequelize.ARRAY(Sequelize.STRING),
  schedule: Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)),
  esports_fan: Sequelize.BOOLEAN


});


var Gamer_Details = connection.define('gamer_details', {
  
});

var Game = connection.define('game', {
	game_name: Sequelize.STRING, 
});


var User_Game_Info = connection.define('user_game_info', {
    summary: Sequelize.TEXT,
    attitude: Sequelize.STRING,
    rank: Sequelize.STRING,
    want_improve: Sequelize.BOOLEAN
    //mode_name: Sequelize.ARRAY(Sequelize.STRING)

});

Game.hasMany(User_Game_Info);
Game.hasMany(Gamer_Details);

User_Game_Info.hasMany(Gamer_Details);
User.hasOne(Gamer_Details);

connection.sync().then(function() {
	Game.findById(1).then(function(game){
		console.log(game.dataValues);

	});
});

