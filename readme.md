# gemoji

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Gemoji (**G**itHub **Emoji**) maps Gemoji short-codes and unicode emoji to
objects containing info on their respective category, description, names,
and tags.

## Installation

[npm][]:

```bash
npm install gemoji
```

## Usage

```javascript
var gemoji = require('gemoji')

console.log(gemoji.name.cat)
```

Yields:

```js
{
  category: 'animals & nature',
  description: 'cat face',
  names: ['cat'],
  tags: ['pet'],
  name: 'cat',
  emoji: '🐱'
}
```

### By unicode emoji

```javascript
console.log(gemoji.unicode['🐶'])
```

Yields:

```js
{
  category: 'animals & nature',
  description: 'dog face',
  names: ['dog'],
  tags: ['pet'],
  name: 'dog',
  emoji: '🐶'
}
```

...and...

```javascript
console.log(gemoji.unicode['\uD83D\uDCA9'])
```

Yields:

```js
{
  category: 'smileys & emotion',
  description: 'pile of poo',
  names: ['hankey', 'poop', 'shit'],
  tags: ['crap'],
  name: 'hankey',
  emoji: '💩'
}
```

## Supported Gemoji

See [support.md][support].

## Data

The emoji list is crawled from [github/gemoji][gh] and later processed
for relevant information.  See its [license][gh-license] for more
information.

No images are included in this repository—the copyrighted material may or may
not be available on the users computer.

## Related

*   [`emoji-emotion`](https://github.com/words/emoji-emotion)
    — List of emoji rated for valence
*   [`emoticon`](https://github.com/wooorm/emoticon)
    — Info on ASCII emoticons
*   [`strip-skin-tone`](https://github.com/wooorm/strip-skin-tone)
    — Strip skin-tones from emoji

## Disclaimer

`wooorm/gemoji` is not affiliated with **GitHub**.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/gemoji.svg

[build]: https://travis-ci.org/wooorm/gemoji

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/gemoji.svg

[coverage]: https://codecov.io/github/wooorm/gemoji

[downloads-badge]: https://img.shields.io/npm/dm/gemoji.svg

[downloads]: https://www.npmjs.com/package/gemoji

[size-badge]: https://img.shields.io/bundlephobia/minzip/gemoji.svg

[size]: https://bundlephobia.com/result?p=gemoji

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[support]: support.md

[gh]: https://github.com/github/gemoji

[gh-license]: https://github.com/github/gemoji/blob/55a0080/LICENSE
