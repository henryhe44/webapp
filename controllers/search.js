var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
  res.render('search');
})

router.post('/',
  passport.authenticate('local',
    { failureRedirect: '/login' }),
  function(req, res){
   // post method for the search query

})

module.exports = router;
