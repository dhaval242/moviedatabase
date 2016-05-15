'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('TESTING', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/movies')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it ('should add a movie', function(done){
    request(app)
    .post('/api/movies')
    .expect(201)
    .send({'name':'X-Men'})
    .end(function(err, res){
      if (err) return done(err);
      res.body.should.be.instanceof(Object);
      res.body.name.should.equal('X-Men');
      done();
    }); 
  });

});