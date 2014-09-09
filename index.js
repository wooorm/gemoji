'use strict';

var gemoji, named, unicodes, unicode, has, key;

gemoji = require('./data/gemoji.json');

has = Object.prototype.hasOwnProperty;

unicodes = {};
named = {};

for (key in gemoji) {
    /* istanbul ignore else */
    if (has.call(gemoji, key)) {
        unicode = gemoji[key];
        named[key] = unicode;

        /* Some unicode emoji have aliasses, here we make sure the emoji is
         * written once. */
        if (!has.call(unicodes, unicode)) {
            unicodes[unicode] = key;
        }
    }
}

exports.unicode = unicodes;
exports.name = named;
