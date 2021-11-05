# gemoji

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Info on gemoji.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`gemoji`](#gemoji-1)
    *   [`nameToEmoji`](#nametoemoji)
    *   [`emojiToName`](#emojitoname)
*   [Types](#types)
*   [List of gemoji](#list-of-gemoji)
*   [Data](#data)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Disclaimer](#disclaimer)
*   [License](#license)

## What is this?

This package contains info on gemoji (**G**itHub **Emoji**).
Gemoji are the shortcodes that GitHub uses to represent emoji.
For example, `:grinning:` can be used for `😀`.

## When should I use this?

Use this package if you need:

*   info on gemoji, such as associated tags, description, and
    category
*   to map between emoji and names and vice versa
*   to list emoji or names

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install gemoji
```

In Deno with [Skypack][]:

```js
import {gemoji} from 'https://cdn.skypack.dev/gemoji@7?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {gemoji} from 'https://cdn.skypack.dev/gemoji@7?min'
</script>
```

## Use

See examples below.

## API

This package exports the following identifiers: `gemoji`, `nameToEmoji`,
`emojiToName`.
There is no default export.

### `gemoji`

List of info objects (`Array<Gemoji>`).
Each `Gemoji` has the following fields:

*   `emoji` (`string`)
    — example: `😀`
*   `names` (`Array<string>`)
    — example: `['grinning']`
*   `tags` (`Array<string>`)
    — example: `['smile', 'happy']`
*   `description` (`string`)
    — example: `grinning face`
*   `category` (`string`)
    — example: `Smileys & Emotion`

###### Example

```js
import {gemoji} from 'gemoji'

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
  // …
]
```

### `nameToEmoji`

Map of names (`100`) to emoji (`💯`) (`Record<string, string>`).

###### Example

```js
import {nameToEmoji} from 'gemoji'

console.log(nameToEmoji.cat) //=> 🐱
console.log(nameToEmoji.poop) //=> 💩
```

### `emojiToName`

Map of emoji (`😀`) to names (`grinning`) (`Record<string, string>`).

###### Example

```js
import {emojiToName} from 'gemoji'

console.log(emojiToName['🐶']) //=> dog
console.log(emojiToName['\uD83D\uDCA9']) //=> hankey
```

## Types

This package is fully typed with [TypeScript][].
It exports an additional `Gemoji` type that models its respective interface.

## List of gemoji

See [`support.md`][support].

## Data

The emoji list is crawled from [`github/gemoji`][gh] and later processed for
relevant information.
See its [license][gh-license] for more information.

No images are included in this repository: the copyrighted material may or may
not be available on the users computer.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`words/emoji-emotion`](https://github.com/words/emoji-emotion)
    — list of emoji rated for valence
*   [`wooorm/emoticon`](https://github.com/wooorm/emoticon)
    — info on ASCII emoticons
*   [`wooorm/strip-skin-tone`](https://github.com/wooorm/strip-skin-tone)
    — Strip skin-tones from emoji
*   [`wooorm.com/checkmoji`](https://wooorm.com/checkmoji/)
    — Check emoji across platforms

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Disclaimer

`wooorm/gemoji` is not affiliated with **GitHub**.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/gemoji/workflows/main/badge.svg

[build]: https://github.com/wooorm/gemoji/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/gemoji.svg

[coverage]: https://codecov.io/github/wooorm/gemoji

[downloads-badge]: https://img.shields.io/npm/dm/gemoji.svg

[downloads]: https://www.npmjs.com/package/gemoji

[size-badge]: https://img.shields.io/bundlephobia/minzip/gemoji.svg

[size]: https://bundlephobia.com/result?p=gemoji

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[support]: support.md

[gh]: https://github.com/github/gemoji

[gh-license]: https://github.com/github/gemoji/blob/55a0080/LICENSE
