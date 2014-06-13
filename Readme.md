# gemoji [![Build Status](https://travis-ci.org/wooorm/gemoji.svg?branch=master)](https://travis-ci.org/wooorm/gemoji) [![Coverage Status](https://img.shields.io/coveralls/wooorm/gemoji.svg)](https://coveralls.io/r/wooorm/gemoji?branch=master)

---

Named and unicode Gemoji.

## Installation

NPM:
```sh
$ npm install gemoji
```

Component.js:
```sh
$ component install wooorm/gemoji
```

## Usage

```js
var gemoji = require('gemoji');

gemoji.name["cat"]; // "🐱"
gemoji.unicode["🐶"]; // "dog"
gemoji.unicode["\uD83D\uDCA9"]; // "poop"
```

## License

  MIT
