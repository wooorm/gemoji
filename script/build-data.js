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
var data = require('../data/emoji.json');

/*
 * Remove all gemoji without a unicode representation.
 */

data = data.filter(function (gemoji) {
    return 'emoji' in gemoji;
});

/*
 * Create a dictionary with GitHub names as keys,
 * and unicode emoji is values.
 */

var map = {};

data.forEach(function (gemoji) {
    /* eslint-disable no-console */
    if (gemoji.emoji in map) {
        console.log('duplicate!', gemoji, map[gemoji.emoji]);
    }

    map[gemoji.emoji] = {
        'description': gemoji.description,
        'names': gemoji.aliases,
        'tags': gemoji.tags
    };
});

/*
 * Write the dictionary.
 */

fs.writeFileSync('data/gemoji.json', JSON.stringify(map, null, 2) + '\n');
