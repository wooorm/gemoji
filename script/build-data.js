'use strict'

var fs = require('fs')
var input = require('../emoji.json')

var main = []
var nameToEmoji = {}
var emojiToName = {}

input.forEach(function (info) {
  var emoji = info.emoji
  var names = info.aliases
  var name = names[0]

  // Ignore gemoji without unicode representation.
  if (!emoji) {
    console.warn('Ignoring `%j`', name || info)
    return
  }

  main.push({
    emoji: emoji,
    names: names,
    tags: info.tags,
    description: info.description,
    category: info.category
  })

  emojiToName[emoji] = name
  names.forEach((n) => {
    nameToEmoji[n] = emoji
  })
})

write('name-to-emoji', nameToEmoji)
write('emoji-to-name', emojiToName)
write('index', main)

function write(name, data) {
  fs.writeFileSync(name + '.json', JSON.stringify(data, null, 2) + '\n')
}
