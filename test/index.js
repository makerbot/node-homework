'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'test';

const should = require('chai').should()
  , request = require('supertest')
  , letters = require('../helpers/letters')
  // start the server for integration tests
  , app = require('../')
  ;

// test the individual functions
describe('Unit Tests', () => {
  it('randomString should return a random string', () => {
    const string = letters.randomString();
    string.should.be.a('string').with.length.above(0);
  });

  it('reverseIt should reverse the string', () => {
    let reversed = letters.reverseIt('spilled on server');
    reversed.should.be.a('string').and.equal('revres no dellips');

    reversed = letters.reverseIt('naan');
    reversed.should.be.a('string').and.equal('naan');
  });
});

// test the API
describe('Integration Tests', () => {
  it('"GET /" should return a random string', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect(res => {
        res.body.reply.should.be.a('string').with.length.above(0);
      })
      .end(done);
  });

  it('"POST /" should reverse a string', done => {
    request(app)
      .post('/')
      .send({
        string: 'spilled on server'
      })
      .expect(200)
      .expect(res => {
        res.body.reply.should.be.a('string').and.equal('revres no dellips');
      })
      .end(done);
  });

  after(() => {
    // shut down the server
    app.close();
  })
});
