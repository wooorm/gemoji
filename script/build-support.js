/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module gemoji:script:data
 * @fileoverview Transform data.
 */

'use strict';

/* Dependencies. */
var fs = require('fs');
var table = require('markdown-table');
var width = require('string-width');
var gemoji = require('../index.json');

/* Set up data. */
var data = [[
  'Emoji',
  'Name(s)',
  'Tags',
  'Escaped Unicode'
]].concat(Object.keys(gemoji).map(function (emoji) {
  return [
    emoji,
    gemoji[emoji].names.join('; '),
    gemoji[emoji].tags.join('; '),
    escape(emoji)
  ];
}));

var doc = [
  'Note that this file does not contain the gemoji’s as rendered by',
  'GitHub; ' + Object.keys(gemoji).length + ' small images would',
  'make viewing this document very slow.',
  '',
  'Also: You need a browser capable of viewing unicode-emoji to make',
  'sense of the first column!',
  '',
  table(data, {align: 'c', stringLength: width}),
  ''
].join('\n');

/* Write. */
fs.writeFileSync('support.md', doc);

/**
 * Escape a string into its unicode points.
 *
 * @param {string} value - Value to encode.
 * @return {string}
 */
function escape(value) {
  return value.split('').map(function (character) {
    return '\\u' + character.charCodeAt(0).toString(16);
  }).join('');
}
