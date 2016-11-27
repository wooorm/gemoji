/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module gemoji
 * @fileoverview GitHub emoji: gemoji.
 */

'use strict';

/* Dependencies. */
var data = require('./index.json');

/* Expose. */
exports.unicode = data;
exports.name = {};

/* Transform all emoji. */
var emoji;

for (emoji in data) {
  enhance(emoji);
}

/**
 * Transform an emoji.
 *
 * @param {string} character - Unicode emoji to extend.
 */
function enhance(character) {
  var information = data[character];
  var names = information.names;
  var length = names.length;
  var index = 0; /* first must be skipped. */

  /* Add the main `name` and the emoji. */
  information.name = names[0];
  information.emoji = character;

  /* Add names. */
  exports.name[names[0]] = information;

  while (++index < length) {
    exports.name[names[index]] = information;
  }
}
