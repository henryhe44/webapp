const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const express = require('express')

const server = require('../../app')
chai.use(chaiHttp)

describe('logout', function(){
    it('should log out the user and redirect to home page on / PUT', function(done){
      chai.request(server)
        .get('/')
        .end(function(err, res) {
          chai.request(server)
            .put('/')
            .send({'isOnline': false})
            .end(function(error, response) {
              response.should.have.status(200)
              done()
            })
        })
    })
    it('should log out the user and redirect to home page on /profile PUT', function(done) {
      chai.request(server)
        .get('/profile')
        .end(function(err, res) {
          chai.request(server)
            .put('/profile')
            .send({'isOnline': false})
            .end(function(error, response) {
              response.should.have.status(200)
              response.should.be.json
              done()
            })
        })
    })
    it('should log out the user and redirect to home page on /group PUT', function(done) {
      chai.request(server)
        .get('/search')
        .end(function(err, res) {
          chai.request(server)
            .put('/profile')
            .send({'isOnline': false})
            .end(function(error, response) {
              response.should.have.status(200)
              response.should.be.json
              done()
            })
        })
    })
    it('should log out the user and redirect to home page on /search PUT', function(done) {
      chai.request(server)
        .get('/search')
        .end(function(err, res) {
          chai.request(server)
            .put('/profile')
            .send({'isOnline': false})
            .end(function(error, response) {
              response.should.have.status(200)
              response.should.be.json
              done()
            })
        })
    })
})
