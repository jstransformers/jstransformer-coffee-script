'use strict'

const coffee = require('coffeescript')
const merge = require('merge')

exports.name = 'coffeescript'
exports.inputFormats = ['coffee', 'coffee-script']
exports.outputFormat = 'js'

exports.render = function (src, options, locals) {
  // Bring the locals into the compile options.
  options = merge(options || {}, locals || {})

  return coffee.compile(src, options)
}
