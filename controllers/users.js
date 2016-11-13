const User      = require('../models').User
const express   = require('express')
const router    = express.Router();

router.get('/users', (req, res) => { 
    User.findAll()
        .then((users) => { 
            let all = users[0].dataValues
            console.log(typeof(all)) 
            res.render('users', {all})        
        })
})


module.exports = router 