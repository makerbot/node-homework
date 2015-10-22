const sid = require('shortid');

exports.reverseIt = string => {
  return string.split('').reverse().join('');
};

exports.randomString = () => {
  return sid.generate();
};
