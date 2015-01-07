'use strict';

/*
 * Dependencies.
 */

var fs,
    table,
    gemoji;

fs = require('fs');
table = require('markdown-table');
gemoji = require('../data/gemoji');

/**
 * Escape a string into its unicode points..
 *
 * @param {string} value
 * @return {string}
 */
function escape(value) {
    return value.split('').map(function (character) {
        return '\\u' + character.charCodeAt(0).toString(16);
    }).join('');
}

/*
 * Create an expression from all emoji.
 */

var expression;

expression = new RegExp(Object.keys(gemoji).join('|'), 'g');

/*
 * Set up data.
 */

var data;

data = [
    ['Emoji', 'Name(s)', 'Tags', 'Escaped Unicode']
].concat(
    Object.keys(gemoji).map(function (emoji) {
        return [
            emoji,
            gemoji[emoji].names.join('; '),
            gemoji[emoji].tags.join('; '),
            escape(emoji)
        ];
    })
);

/**
 * Get the width of displayed characters.
 *
 * @param {string} value
 * @return {number}
 */
function stringLength(value) {
    return value.replace(expression, '  ').length;
}

/*
 * Write support.
 */

fs.writeFileSync('Support.md',
    'Supported Gemoji:\n' +
    '=================\n' +
    '\n' +
    'Note that this file does not contain the gemoji\'s as rendered by ' +
    'GitHub;\n' + Object.keys(gemoji).length + ' small images would make ' +
    'viewing this document very slow.\n' +
    '\n' +
    'Also: You need a browser capable of viewing unicode-emoji to make ' +
    'sense of the first column!\n' +
    '\n' +

    table(data, {
        'align': ['c', 'c', 'c', 'c'],
        'stringLength': stringLength
    }) +

    '\n'
);
