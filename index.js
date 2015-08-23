/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module gemoji
 * @fileoverview GitHub emoji: gemoji.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Data.
 */

var data = require('./data/gemoji.json');

/*
 * Dictionaries.
 */

var named = {};

var gemoji = {
    'unicode': data,
    'name': named
};

/**
 * Transform an emoji.
 *
 * @param {string} character - Unicode emoji to extend.
 */
function enhanceEmoji(character) {
    var information = data[character];
    var names = information.names;
    var index = 0; // first must be skipped.
    var length = names.length;

    /*
     * Add the main `name`.
     */

    information.name = names[0];

    /*
     * Add the emoji to the object too.
     */

    information.emoji = character;

    /*
     * Add the main `name` to `named`.
     */

    named[names[0]] = information;

    /*
     * If the emoji is known by other names,
     * add those to the map too.
     */

    while (++index < length) {
        named[names[index]] = information;
    }
}

/*
 * Transform all emoji.
 */

var emoji;

for (emoji in data) {
    enhanceEmoji(emoji);
}

/*
 * Expose.
 */

module.exports = gemoji;
