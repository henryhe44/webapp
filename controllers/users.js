'use strict'
const User      = require('../models').User
const express   = require('express')
const router    = express.Router();

router.get('/users', (req, res) => { 
    User.findAll()
        .then((users) => { 
            let all = users[0].dataValues
            console.log(users) 
            res.render('users', {all: users})        
        })
})


module.exports = router 