/**
 * @typedef {import('./script/build-data.js').Emoji} Emoji
 */

import fs from 'node:fs/promises'
import assert from 'node:assert/strict'
import test from 'node:test'
import {gemoji} from './index.js'

/** @type {Array<Emoji>} */
const emoji = JSON.parse(String(await fs.readFile('emoji.json')))

test('gemoji', function () {
  let index = -1

  while (++index < gemoji.length) {
    const info = gemoji[index]

    assert.strictEqual(info.emoji, emoji[index].emoji, 'emoji')
    assert.strictEqual(info.category, emoji[index].category, 'category')
    assert.strictEqual(
      info.description,
      emoji[index].description,
      'description'
    )
    assert.deepStrictEqual(info.names, emoji[index].aliases, 'names')
    assert.deepStrictEqual(info.tags, emoji[index].tags, 'tags')
  }
})
