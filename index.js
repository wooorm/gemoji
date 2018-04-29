'use strict'

var data = require('./index.json')

exports.unicode = data
exports.name = {}

var emoji

for (emoji in data) {
  enhance(emoji)
}

/* Transform an emoji. */
function enhance(character) {
  var information = data[character]
  var names = information.names
  var length = names.length
  var index = 0 /* First must be skipped. */

  /* Add the main `name` and the emoji. */
  information.name = names[0]
  information.emoji = character

  /* Add names. */
  exports.name[names[0]] = information

  while (++index < length) {
    exports.name[names[index]] = information
  }
}
