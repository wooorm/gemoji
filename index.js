'use strict'

var data = require('./index.json')

exports.unicode = data
exports.name = {}
exports.category = {}
exports.tag = {}

var emoji

for (emoji in data) {
  enhance(emoji)
}

// Transform an emoji.
function enhance(character) {
  var information = data[character]
  var names = information.names
  var length = names.length
  var index = 0 // First must be skipped.

  // Add the main `name` and the emoji.
  information.name = names[0]
  information.emoji = character

  // Index by name.
  exports.name[names[0]] = information

  // Index by category
  if (!exports.category[information.category]) {
    exports.category[information.category] = {}
  }

  exports.category[information.category][names[0]] = information

  // Index by tag
  var t
  var tag
  for (t = 0; t < information.tags.length; t++) {
    tag = information.tags[t]
    if (!exports.tag[tag]) {
      exports.tag[tag] = {}
    }
    exports.tag[tag][names[0]] = information
  }

  while (++index < length) {
    // Index by name.
    exports.name[names[index]] = information
    // Index by category
    exports.category[information.category][names[index]] = information
    // Index by tag
    for (t = 0; t < information.tags.length; t++) {
      tag = information.tags[t]
      exports.tag[tag][names[index]] = information
    }
  }
}
