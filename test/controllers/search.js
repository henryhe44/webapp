const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const express = require('express')

const server = express() // should require('../../server/app')
chai.use(chaiHttp)

describe('search for users', function(){
    it('should list ALL searched for users on /search POST', function(done){
        chai.request(server)
          .post('/search')
          .send({'gamesPlayed': 'Overwatch'})
          .end(function(err, res) {
              res.should.have.status(200)
              res.should.be.json
              done()
          })
    })
})
