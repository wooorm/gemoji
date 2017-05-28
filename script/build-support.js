'use strict';

var zone = require('mdast-zone');
var u = require('unist-builder');
var gemoji = require('..').unicode;

module.exports = support;

function support() {
  return transformer;
}

function transformer(tree) {
  zone(tree, 'support', replace);
}

function replace(start, nodes, end) {
  return [start].concat(data()).concat([end]);
}

function data() {
  return [
    u('paragraph', [
      u('text', 'Gemoji supports ' + Object.keys(gemoji).length + ' emoji.')
    ]),
    table()
  ];
}

function table() {
  var header = [
    'Emoji',
    'Name(s)',
    'Tags',
    'Escaped Unicode'
  ];

  return u('table', {align: []}, [
    u('tableRow', header.map(cell))
  ].concat(
    Object
      .keys(gemoji)
      .map(function (emoji) {
        var info = gemoji[emoji];

        return u('tableRow', [
          cell(emoji),
          cell(info.names.join('; ')),
          cell(info.tags.join('; ')),
          cell(escape(emoji))
        ]);
      })
  ));
}

function cell(value) {
  return u('tableCell', [u('text', value)]);
}

/* Escape a string into its unicode points. */
function escape(value) {
  return value.split('').map(function (character) {
    return '\\u' + character.charCodeAt(0).toString(16);
  }).join('');
}
