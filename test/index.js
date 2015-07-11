var should = require('chai').should();
var request = require('request');
var letters = require('../helpers/letters');
// define testMode so server doesn't log requests in console
global.testMode = true;
// start the server for integration tests
var app = require('../');

// test the individual functions
describe('Unit Tests', function() {
  it('should return a random string', function(done) {
    letters.randomString(function(string) {
      string.should.be.a('string').with.length.above(0);
      done();
    });
  });

  it('should reverse the string', function() {
    var reversed = letters.reverseIt('spilled on server');
    reversed.should.be.a('string').and.equal('revres no dellips');

    reversed = letters.reverseIt('naan');
    reversed.should.be.a('string').and.equal('naan');
  });
});

// test the API
describe('Integration Tests', function() {
  var url;

  before(function() {
    url = 'http://localhost:' + app.address().port;
  });

  it('"GET /" should return a random string', function(done) {
    request({
      uri: url,
      json: true
    }, function(err, response, body) {
      if (err) throw err;
      body.reply.should.be.a('string').with.length.above(0);
      done();
    });
  });

  it('"POST /" should reverse a string', function(done) {
    request({
      method: 'POST',
      uri: url,
      json: true,
      body: {
        string: 'spilled on server'
      }
    }, function(err, response, body) {
      if (err) throw err;
      body.reply.should.be.a('string').and.equal('revres no dellips');
      done();
    });
  });

  after(function() {
    // shut down the server
    app.close();
  })
});
