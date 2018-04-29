'use strict'

var fs = require('fs')
var path = require('path')
var data = require('../emoji.json')

/* Create a dictionary with GitHub names as keys,
 * and unicode emoji is values. */
var map = {}

data.forEach(function(gemoji) {
  /* Ignore gemoji without a unicode representation. */
  if (!('emoji' in gemoji)) {
    return
  }

  if (gemoji.emoji in map) {
    console.log('duplicate!', gemoji, map[gemoji.emoji])
  }

  map[gemoji.emoji] = {
    category: gemoji.category.toLowerCase(),
    description: gemoji.description,
    names: gemoji.aliases,
    tags: gemoji.tags
  }
})

var doc = JSON.stringify(map, null, 2) + '\n'

fs.writeFileSync(path.join('index.json'), doc)
