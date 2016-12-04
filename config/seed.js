"use strict";
let faker = require('faker')
let User = require('../models').User
let Game = require('../models').Game
let Games = ['Overwatch', 'Starcraft','League of Legends']

User.sync().then()

module.exports = 
    function(seed_amt){

        // Game.sync().then
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
