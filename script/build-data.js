'use strict'

var fs = require('fs')
var input = require('../emoji.json')

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
    emoji: emoji,
    names: names,
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

write('name-to-emoji', nameToEmoji)
write('emoji-to-name', emojiToName)
write('index', main)

function write(name, data) {
  fs.writeFileSync(name + '.json', JSON.stringify(data, null, 2) + '\n')
}
