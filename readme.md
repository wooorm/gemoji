# gemoji

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Gemoji (**G**itHub **Emoji**) contains info (category, description, names, and
tags) on Emoji and GitHub “Gemoji” shortcodes.

Also includes pre-built indexes to map to between names and emoji:

*   [`gemoji/emoji-to-name`][emoji-to-name]
    — Map emoji (🐱) to preferred name (cat)
*   [`gemoji/name-to-emoji`][name-to-emoji]
    — Map name (cat) to emoji (🐱)

## Install

[npm][]:

```sh
npm install gemoji
```

## Use

```js
var gemoji = require('gemoji')

console.log(gemoji)
```

Yields:

```js
[
  {
    emoji: '😀',
    names: ['grinning'],
    tags: ['smile', 'happy'],
    description: 'grinning face',
    category: 'Smileys & Emotion'
  },
  {
    emoji: '😃',
    names: ['smiley'],
    tags: ['happy', 'joy', 'haha'],
    description: 'grinning face with big eyes',
    category: 'Smileys & Emotion'
  },
  {
    emoji: '😄',
    names: ['smile'],
    tags: ['happy', 'joy', 'laugh', 'pleased'],
    description: 'grinning face with smiling eyes',
    category: 'Smileys & Emotion'
  },
  {
    emoji: '😁',
    names: ['grin'],
    tags: [],
    description: 'beaming face with smiling eyes',
    category: 'Smileys & Emotion'
  },
  {
    emoji: '😆',
    names: ['laughing', 'satisfied'],
    tags: ['happy', 'haha'],
    description: 'grinning squinting face',
    category: 'Smileys & Emotion'
  },
  // …
]
```

### Get emoji

```js
var toEmoji = require('gemoji/name-to-emoji')

console.log(toEmoji.cat)
console.log(toEmoji.poop)
```

Yields:

```txt
🐱
💩
```

### Get name

```js
var toName = require('gemoji/emoji-to-name')

console.log(toName['🐶'])
console.log(toName['\uD83D\uDCA9'])
```

Yields:

```txt
dog
hankey
```

## Supported Gemoji

See [support.md][support].

## Data

The emoji list is crawled from [`github/gemoji`][gh] and later processed for
relevant information.
See its [license][gh-license] for more information.

No images are included in this repository: the copyrighted material may or may
not be available on the users computer.

## Related

*   [`emoji-emotion`](https://github.com/words/emoji-emotion)
    — List of emoji rated for valence
*   [`emoticon`](https://github.com/wooorm/emoticon)
    — Info on ASCII emoticons
*   [`strip-skin-tone`](https://github.com/wooorm/strip-skin-tone)
    — Strip skin-tones from emoji
*   [`wooorm.com/checkmoji`](https://wooorm.com/checkmoji/)
    — Check emoji across platforms

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

[emoji-to-name]: emoji-to-name.json

[name-to-emoji]: name-to-emoji.json
