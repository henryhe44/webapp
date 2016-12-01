"use strict";
let faker = require('faker')
let User = require('../models').User


User.sync().then()

module.exports = 
    function(seed_amt){
        for(let i = 0; i < seed_amt; i++){
            User.sync().then(
                () => {
                    User.build({
                        first_name: faker.name.firstName(),
                        last_name:  faker.name.lastName(),
                        username:   faker.internet.userName(),
                        email:      faker.internet.email(),
                        password:   "123"
                     }).save()
                        .catch((error) => {
                            console.log(error)
                        })
                }
            )
        }
    }
