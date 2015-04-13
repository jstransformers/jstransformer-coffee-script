'use strict';

var coffee = require('coffee-script');

exports.name = 'coffee-script';
exports.inputFormats = ['coffee'];
exports.outputFormat = 'js';

exports.render = coffee.compile;
