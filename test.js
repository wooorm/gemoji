'use strict'

var assert = require('assert')
var test = require('tape')
var emoji = require('./emoji.json')
var gemoji = require('.')

test('gemoji', function (t) {
  t.plan(emoji.length)

  gemoji.forEach(function (info, index) {
    var {description, category, aliases, tags} = emoji[index]
    var unicode = emoji[index].emoji

    t.doesNotThrow(function () {
      assert.strictEqual(info.emoji, unicode, 'emoji')
      assert.strictEqual(info.category, category, 'category')
      assert.strictEqual(info.description, description, 'description')
      assert.deepStrictEqual(info.names, aliases, 'names')
      assert.deepStrictEqual(info.tags, tags, 'tags')
    }, unicode + '   ' + description)
  })

  t.end()
})
