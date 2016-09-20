'use strict';

var coffee = require('iced-coffee-script-3');
var merge = require('merge');

exports.name = 'iced-coffee-script-3';
exports.inputFormats = ['coffee', 'coffee-script'];
exports.outputFormat = 'js';

exports.render = function (src, options, locals) {
  // Bring the locals into the compile options.
  options = merge(options || {}, locals || {});

  return coffee.compile(src, options);
}
