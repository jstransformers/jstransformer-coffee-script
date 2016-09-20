# jstransformer-iced-coffee-script

[IcedCoffeeScript](http://maxtaco.github.io/coffee-script/) support for [JSTransformers](http://github.com/jstransformers).

## Installation

    npm install jstransformer-iced-coffee-script

## API

```js
var coffee = require('jstransformer')(require('jstransformer-iced-coffee-script'))

coffee.render('n = 42', {bare: true}).body
//=> var n; n = 42;
```

## License

MIT
