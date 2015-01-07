# gemoji [![Build Status](https://img.shields.io/travis/wooorm/gemoji.svg?style=flat)](https://travis-ci.org/wooorm/gemoji) [![Coverage Status](https://img.shields.io/coveralls/wooorm/gemoji.svg?style=flat)](https://coveralls.io/r/wooorm/gemoji?branch=master)

GitHub emoji: gemoji.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
$ npm install gemoji
```

[Component.js](https://github.com/componentjs/component):

```bash
$ component install wooorm/gemoji
```

[Bower](http://bower.io/#install-packages):

```bash
$ bower install gemoji
```

## Usage

```javascript
var gemoji = require('gemoji');

gemoji.name['cat'];
```

Yields:

```json
{
  "description": "cat face",
  "names": ["cat"],
  "tags": ["pet"],
  "name": "cat",
  "emoji": "🐱"
}
```

### By unicode emoji

```javascript
gemoji.unicode['🐶'];
```

Yields:

```json
{
  "description": "dog face",
  "names": ["dog"],
  "tags": ["pet"],
  "name": "dog",
  "emoji": "🐶"
}
```

...and...

```javascript
gemoji.unicode['\uD83D\uDCA9'];
```

Yields:

```json
{
  "description": "pile of poo",
  "names": ["hankey", "poop", "shit"],
  "tags": ["crap"],
  "name": "hankey",
  "emoji": "💩"
}
```

## Supported Gemoji

See [Support.md](Support.md).

## Data

The emoji list (`./data/emoji.json`) is crawled from [github/gemoji](https://github.com/github/gemoji).
See its [license](https://github.com/github/gemoji/blob/2d799338d94a223cd341d92de3a9848d5368f9ef/LICENSE) for more information.

No images are included in this repository—the copyrighted material may or may not be available on the users computer.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
