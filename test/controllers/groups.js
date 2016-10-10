const chai = require('chai')
const mocha = require('mocha')
const chaiHttp = require('chai-http')
const express = require('express')
const Group = require('../../server/models/group')

const server = express() // should require('../../server/app')
chai.use(chaiHttp)

describe('groups', function() {
    it('should display a SINGLE group on /group/<id> GET', function(done){
      var newGroup = new Group({
        members: {'username' , 'seconduser'},
        size: 2
      })
      newGroup.save(function(err, data) {
        chai.request(server)
          .get('/group/' + data.id)
          .end(function(err, res) {
            res.should.have.should(200)
            res.should.be.json
            res.body.should.be.a('object')
            res.body.should.have.property('_id')
            res.body.should.have.property('members')
            res.body.should.have.property('size')
            res.body.members.should.equal({'username' , 'seconduser'})
            res.body.size.should.equal(2)
            res.body._id.should.equal(data.id)
            done()
          })
      })
    })
})
