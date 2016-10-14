const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const express = require('express')

const server = require('../../app')
chai.use(chaiHttp)

describe('login', function(){
    it('should render the login page on /login GET', function(done){
        chai.request(server)
          .get('/login')
          .end(function(err, res) {
              res.should.have.status(200)
              res.should.be.json
              done()
          })
    })
    it('should redirect to profile page with valid username/password on /login PUT', function(done) {
        chai.request(server)
          .get('/login')
          .end(function(err, res) {
            chai.request(server)
              .put('/login')
              .send({'username': 'username', 'password': 'password'})
              .end(function(error, response) {
                response.should.have.status(200)
                response.should.be.json
                done()
              })
          })
    })
})
