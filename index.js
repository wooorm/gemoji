'use strict';

/*
 * Data.
 */

var gemoji;

gemoji = require('./data/gemoji.json');

/*
 * Cached methods.
 */

var has;

has = Object.prototype.hasOwnProperty;

/*
 * Create a dictionary to hold the emoji by name.
 */

var named;

named = {};

/**
 * Transform an emoji.
 *
 * @param {string} character - Unicode emoji to extend.
 */
function enhanceEmoji(character) {
    var information,
        names,
        index,
        length;

    information = gemoji[character];
    names = information.names;

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
     * add those too to the map.
     */

    index = 0;
    length = names.length;

    while (++index < length) {
        named[names[index]] = information;
    }
}

/*
 * Transform all emoji.
 */

var emoji;

for (emoji in gemoji) {
    /* istanbul ignore else */
    if (has.call(gemoji, emoji)) {
        enhanceEmoji(emoji);
    }
}

/*
 * Expose the extended data (`gemoji`) as `unicode`.
 */

exports.unicode = gemoji;

/*
 * Expose the name-to-unicode dictionary (`named`) as `name`.
 */

exports.name = named;
