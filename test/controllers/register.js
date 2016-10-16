const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const express = require('express')

const User = require('../../models/user')
const server = require('../../app')
chai.use(chaiHttp)

describe('registering for an account', function(){

    // Profile.collection.drop()

    // beforeEach(function(done) {
    //   var newUser = User.create({
    //     firstName: 'Rob',
    //     lastName: 'Swanson',
    //     username: 'Kappa',
    //     email: 'myemail@email.com',
    //     password: 'password'
    //   })
    // })
    // afterEach(function(done) {
    //   User.collection.drop()
    //   done()
    // })

    it('should add a SINGLE user on /register POST', function(done){
      chai.request(server)
        .post('/register')
        .send({
          firstName: 'Rob',
          lastName: 'Swanson',
          username: 'Kappa',
          email: 'myemail@email.com',
          password: 'password'
        })
        .end(function(err, res) {
          res.should.have.status(200)
          res.should.be.json
          res.body.should.be.a('object')
          res.body.should.have.property('SUCCESS')
          done()
        })
    })
})
