# jstransformer-coffee-script

[CoffeeScript](http://coffeescript.org) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-coffee-script/master.svg)](https://travis-ci.org/jstransformers/jstransformer-coffee-script)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-coffee-script/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-coffee-script)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-coffee-script/master.svg)](http://david-dm.org/jstransformers/jstransformer-coffee-script)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-coffee-script.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-coffee-script.svg)](https://www.npmjs.org/package/jstransformer-coffee-script)

## Installation

    npm install jstransformer-coffee-script

## API

```js
var coffee-script = require('jstransformer')(require('jstransformer-coffee-script'))

coffee.render('n = 42', {bare: true}).body
//=> var n; n = 42;
```

## License

MIT
