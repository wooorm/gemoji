# gemoji [![Build Status](https://img.shields.io/travis/wooorm/gemoji.svg)](https://travis-ci.org/wooorm/gemoji) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/gemoji.svg)](https://codecov.io/github/wooorm/gemoji)

GitHub emoji: gemoji. Information on emoji such as description, names, and
tags.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install gemoji
```

**gemoji** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), and
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and globals
module, [uncompressed](gemoji.js) and [compressed](gemoji.min.js).

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

See [support.md](support.md).

## Data

The emoji list is crawled from [github/gemoji](https://github.com/github/gemoji)
and later processed for relevant information. See its [license](https://github.com/github/gemoji/blob/2d799338d94a223cd341d92de3a9848d5368f9ef/LICENSE)
for more information.

No images are included in this repository—the copyrighted material may or may
not be available on the users computer.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
