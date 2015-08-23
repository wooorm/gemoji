/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module gemoji:script:data
 * @fileoverview Transform data.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var table = require('markdown-table');
var width = require('string-width');
var gemoji = require('../data/gemoji');

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

/*
 * Set up data.
 */

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

/*
 * Write support.
 */

fs.writeFileSync('support.md',
    '# Supported Gemoji\n' +
    '\n' +
    'Note that this file does not contain the gemoji\'s as rendered by ' +
    'GitHub;\n' + Object.keys(gemoji).length + ' small images would make ' +
    'viewing this document very slow.\n' +
    '\n' +
    'Also: You need a browser capable of viewing unicode-emoji to make ' +
    'sense of the first column!\n' +
    '\n' +
    table(data, {
        'align': 'c',
        'stringLength': width
    }) +
    '\n'
);
