'use strict'
// const models = require('../models/')
const express   = require('express')
const router    = express.Router()
const passport  = require('passport')
const Redirect  = require('../middlewares/redirect')

router.get('/profile', Redirect.ifNotLoggedIn('/login'), function(req, res) {
    res.render('profile')
})

router.post('/profile', Redirect.ifNotLoggedIn('/login'), function(req, res){

})


module.exports = router;
