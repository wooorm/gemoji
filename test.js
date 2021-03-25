'use strict'

var assert = require('assert')
var test = require('tape')
var emoji = require('./emoji.json')
var gemoji = require('.')

test('gemoji', function (t) {
  var index = -1
  var info

  t.plan(emoji.length)

  while (++index < gemoji.length) {
    info = gemoji[index]

    t.doesNotThrow(function () {
      assert.strictEqual(info.emoji, emoji[index].emoji, 'emoji')
      assert.strictEqual(info.category, emoji[index].category, 'category')
      assert.strictEqual(
        info.description,
        emoji[index].description,
        'description'
      )
      assert.deepStrictEqual(info.names, emoji[index].aliases, 'names')
      assert.deepStrictEqual(info.tags, emoji[index].tags, 'tags')
    }, emoji[index].emoji + '   ' + emoji[index].description)
  }

  t.end()
})
