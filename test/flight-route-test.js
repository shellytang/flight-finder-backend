'use strict';

const expect = require('chai').expect;
const request = require('superagent');

const url = `http://localhost:3000`;
require('../server');

describe('GET /api/flights/:from/:to', function() {
  it('should pass', done => {
    expect(true).to.equal(true);
    done();
  });

  it('should return airports with correct departure and arrival cities', done => {
    request.get(`${url}/api/flights/SEA/PHX`)
      .end((err, res) => {
        expect(res.body).to.be.an.instanceof(Array);
        expect(res.body[0].From).to.equal('SEA');
        expect(res.body[0].To).to.equal('PHX');
        expect(res.body[1].From).to.equal('SEA');
        expect(res.body[1].To).to.equal('PHX');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should return an error with a bad request', done => {
    request.get(`${url}/api/flights/PHX`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

});
