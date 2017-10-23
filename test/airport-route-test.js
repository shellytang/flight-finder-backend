'use strict';

const expect = require('chai').expect;
const request = require('superagent');
const url = `http://localhost:3000`;
require('../server');

describe('GET /api/airports', function() {

  it('should pass', done => {
    expect(true).to.equal(true);
    done();
  });

  it('should return an array of airports', done => {
    request.get(`${url}/api/airports`)
      .end((err, res) => {
        expect(res.body).to.be.an.instanceof(Array);
        expect(res.body).to.have.lengthOf(4);
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('should return an error with a bad request', done => {
    request.get(`${url}/api/airportnames`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });
});
