'use strict';

/**
 * Dependencies.
 */

var fs,
    table,
    gemoji;

fs = require('fs');
table = require('markdown-table');
gemoji = require('./data/gemoji');

/**
 * Escape a unicode emoji.
 */

function escape(value) {
    return value.split('').map(function (character) {
        return '\\u' + character.charCodeAt(0).toString(16);
    }).join('');
}

/**
 * Create an expression from all emoji.
 */

var expression;

expression = new RegExp(
    Object.keys(gemoji).map(function (name) {
        return gemoji[name];
    }).join('|'),
    'g'
)

/**
 * Set up data.
 */

var data;

data = [
    ['Unicode', 'Name', 'Escaped Unicode']
];

data = data.concat(
    Object.keys(gemoji).map(function (name) {
        return [
            gemoji[name],
            name,
            escape(gemoji[name])
        ]
    })
);

/**
 * Write support.
 */

fs.writeFileSync('Supported-Gemoji.md',
    'Supported Gemoji:\n' +
    '=================\n' +
    '\n' +
    'Note that this file does not contain the gemoji\'s as rendered by ' +
    'GitHub;\n' + Object.keys(gemoji).length + ' small images would make ' +
    'viewing this document very slow.\n' +
    '\n' +

    table(data, {
        'align' : ['c', 'c', 'c'],
        'stringLength' : function (value) {
            return value.replace(expression, '  ').length;
        }
    }) +

    '\n'
);
