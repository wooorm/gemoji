import fs from 'fs'

var input = JSON.parse(fs.readFileSync('emoji.json'))

var main = []
var nameToEmoji = {}
var emojiToName = {}
var index = -1
var info
var emoji
var names
var name
var offset

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
  `export var gemoji = ${JSON.stringify(main, null, 2)}
  export var nameToEmoji = ${JSON.stringify(nameToEmoji, null, 2)}
  export var emojiToName = ${JSON.stringify(emojiToName, null, 2)}
  `
)
