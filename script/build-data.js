'use strict';

/**
 * Dependencies.
 */

var fs,
    data;

fs = require('fs');
data = require('../data/emoji.json');

/**
 * Remove all gemoji without a unicode representation.
 */

data = data.filter(function (emojiObject) {
    return 'emoji' in emojiObject;
});

/**
 * Create a dictionary with GitHub names as keys,
 * and unicode emoji is values.
 */

var map;

map = {};

data.forEach(function (emojiObject) {
    emojiObject.aliases.forEach(function (alias) {
        map[alias] = emojiObject.emoji;
    });
});

/**
 * Write the dictionary.
 */

fs.writeFileSync('data/gemoji.json', JSON.stringify(map));
