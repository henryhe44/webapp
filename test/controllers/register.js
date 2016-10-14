const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const express = require('express')

const Profile = require('../../models/profile')
const server = require('../../app')
chai.use(chaiHttp)

describe('registering for an account', function(){

    // Profile.collection.drop()

    beforeEach(function(done) {
      var newProfile = new Profile({
        username: 'username',
        password: 'password',
        firstName: 'Rob',
        lastName: 'Swanson',
        email: 'myemail@email.com',
        gamesPlayed: ['Overwatch', 'DotA 2', 'CS:GO']
      })
      newProfile.save(function(err) {
        done()
      })
    })
    afterEach(function(done) {
      Profile.collection.drop()
      done()
    })

    it('should add a SINGLE profile on /register POST', function(done){
      chai.request(server)
        .post('/register')
        .send({
          username: 'seconduser',
          password: 'password',
          firstName: 'April',
          lastName: 'Ludgate',
          email: 'imnotcrazyiswear@email.com',
          gamesPlayed: ['Overwatch', 'DotA 2', 'CS:GO']
        })
        .end(function(err, res) {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('object')
          res.body.should.have.property('SUCCESS')
          done()
        })
    })
    it('should NOT add a SINGLE duplicate profile on /register POST', function(done) {
      chai.request(server)
        .post('/register')
        .send({
          username: 'username',
          password: 'password',
          firstName: 'Leslie',
          lastName: 'Knope',
          email: 'sunshine@email.com',
          gamesPlayed: {League_of_Legends}
        })
        .end(function(err, res) {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('object')
          res.body.should.have.property('FAILURE')
          done()
        })
    })
})
