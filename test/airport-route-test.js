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

});
