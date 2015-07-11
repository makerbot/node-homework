var aan = require('adjective-adjective-animal');

exports.reverseIt = function(string) {
  return string.split('').reverse().join('');
};

exports.randomString = function(callback) {
  aan('sentence').then(callback);
};
