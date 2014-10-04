# gemoji [![Build Status](https://travis-ci.org/wooorm/gemoji.svg?branch=master)](https://travis-ci.org/wooorm/gemoji) [![Coverage Status](https://img.shields.io/coveralls/wooorm/gemoji.svg)](https://coveralls.io/r/wooorm/gemoji?branch=master)

Named and unicode Gemoji.

## Installation

npm:
```sh
$ npm install gemoji
```

Component:
```sh
$ component install wooorm/gemoji
```

Bower:
```sh
$ bower install gemoji
```

## Usage

```js
var gemoji = require('gemoji');

gemoji.name["cat"]; // "🐱"
gemoji.unicode["🐶"]; // "dog"
gemoji.unicode["\uD83D\uDCA9"]; // "poop"
```

## Supported Gemoji

See [Supported-Gemoji.md](Supported-Gemoji.md).

## Data

The emoji list (`./data/emoji.json`) is crawled from [github/gemoji](https://github.com/github/gemoji).
See its [license](https://github.com/github/gemoji/blob/2d799338d94a223cd341d92de3a9848d5368f9ef/LICENSE) for more information.

No images are included in this repository—the copyrighted material may or may not be available on the users computer.

## License

MIT © Titus Wormer
