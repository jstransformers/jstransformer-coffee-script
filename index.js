'use strict';

var coffee = require('coffee-script');

exports.outputFormat = 'js';
exports.compile = function (str, options) {
  return coffee.compile(str, options);
};
