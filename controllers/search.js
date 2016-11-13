const express = require('express')
const router = express.Router()
const passport = require('passport')

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
