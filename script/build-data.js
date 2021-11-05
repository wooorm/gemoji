/**
 * @typedef Emoji
 * @property {string} emoji
 * @property {string} description
 * @property {string} category
 * @property {Array<string>} aliases
 * @property {Array<string>} tags
 * @property {string} unicode_version
 * @property {string} ios_version
 *
 * @typedef Gemoji
 * @property {string} emoji
 * @property {Array<string>} names
 * @property {Array<string>} tags
 * @property {string} description
 * @property {string} category
 */

import fs from 'node:fs'

/** @type {Array<Emoji>} */
const input = JSON.parse(String(fs.readFileSync('emoji.json')))

/** @type {Array<Gemoji>} */
const main = []
/** @type {Record<string, string>} */
const nameToEmoji = {}
/** @type {Record<string, string>} */
const emojiToName = {}
let index = -1

while (++index < input.length) {
  const info = input[index]
  const emoji = info.emoji
  const names = info.aliases
  const name = names[0]

  // Ignore gemoji without unicode representation.
  if (!emoji) {
    console.warn('Ignoring `%j`', name || info)
    continue
  }

  main.push({
    emoji,
    names,
    tags: info.tags,
    description: info.description,
    category: info.category
  })

  emojiToName[emoji] = name

  let offset = -1
  while (++offset < names.length) {
    nameToEmoji[names[offset]] = emoji
  }
}

fs.writeFileSync(
  'index.js',
  `/**
 * @typedef Gemoji
 * @property {string} emoji
 *   Example: \`'😀'\`.
 * @property {Array<string>} names
 *   Example: \`['grinning']\`.
 * @property {Array<string>} tags
 *   Example: \`['smile', 'happy']\`.
 * @property {string} description
 *   Example: \`'grinning face'\`.
 * @property {string} category
 *   Example: \`'Smileys & Emotion'\`.
 */

/**
 * List of gemoji.
 *
 * @type {Array<Gemoji>}
 */
export const gemoji = ${JSON.stringify(main, null, 2)}

/**
 * Map of names to emoji.
 *
 * @type {Record<string, string>}
 */
export const nameToEmoji = ${JSON.stringify(nameToEmoji, null, 2)}

/**
 * Map of emoji to primary name.
 *
 * @type {Record<string, string>}
 */
export const emojiToName = ${JSON.stringify(emojiToName, null, 2)}
`
)
