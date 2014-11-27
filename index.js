'use strict';

var coffee = require('coffee-script');

exports.name = 'coffee-script';
exports.outputFormat = 'js';

exports.render = function (str, options) {
  return coffee.render(str, options);
};
