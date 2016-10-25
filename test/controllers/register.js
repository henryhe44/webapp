const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const express = require('express')

const model = require('../../models/')
const server = require('../../app')
chai.use(chaiHttp)

describe('registering for an account', function(){

    afterEach(function(done) {
      model.User.drop()
      done()
    })

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
          res.body.should.have.property('firstName')
          res.body.should.have.property('lastName')
          res.body.should.have.property('username')
          res.body.should.have.property('email');
          res.body.should.have.property('password');
          res.body.firstName.should.equal('Rob')
          res.body.lastName.should.equal('Swanson')
          res.body.username.should.equal('Kappa')
          res.body.email.should.equal('myemail@email.com')
          res.body.password.should.equal('password')
          done()
        })
    })
})
