'use strict';

var coffee = require('coffee-script');
var merge = require('merge');

exports.name = 'coffee-script';
exports.inputFormats = ['coffee', 'coffee-script'];
exports.outputFormat = 'js';

exports.render = function (src, options, locals) {
  // Bring the locals into the compile options.
  options = merge(options || {}, locals || {});

  return coffee.compile(src, options);
}
