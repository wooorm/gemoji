import fs from 'node:fs'

const input = JSON.parse(fs.readFileSync('emoji.json'))

const main = []
const nameToEmoji = {}
const emojiToName = {}
let index = -1
let info
let emoji
let names
let name
let offset

while (++index < input.length) {
  info = input[index]
  emoji = info.emoji
  names = info.aliases
  name = names[0]

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
  offset = -1
  while (++offset < names.length) {
    nameToEmoji[names[offset]] = emoji
  }
}

fs.writeFileSync(
  'index.js',
  `export const gemoji = ${JSON.stringify(main, null, 2)}
  export const nameToEmoji = ${JSON.stringify(nameToEmoji, null, 2)}
  export const emojiToName = ${JSON.stringify(emojiToName, null, 2)}
  `
)
