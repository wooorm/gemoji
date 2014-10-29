'use strict';

/**
 * Dependencies.
 */

var emoji,
    gemoji,
    assert;

emoji = require('./data/emoji.json');
gemoji = require('./');
assert = require('assert');

/**
 * Tests for basic structure.
 */

describe('gemoji', function () {
    it('should have a `name` property', function () {
        assert(
            Object.prototype.toString.call(gemoji.name) === '[object Object]'
        );
    });
    it('should have a `unicode` property', function () {
        assert(
            Object.prototype.toString.call(gemoji.unicode) ===
            '[object Object]'
        );
    });
});

/**
 * Validate if a crawled gemoji is indeed (correctly)
 * present in this module.
 *
 * @param {Object} gemojiObject
 * @param {string} gemojiObject.emoji - Unicode
 *   representation.
 * @param {string} gemojiObject.description - Human
 *   description of the picture.
 * @param {Array.<string>} gemojiObject.aliases - List
 *   of names used by GitHub.
 */

function describeGemojiObject(gemojiObject) {
    var unicode,
        description,
        name;

    unicode = gemojiObject.emoji;

    /**
     * Some gemoji, such as `octocat`, do not have a
     * unicode representation. Exit.
     */

    if (!unicode) {
        return;
    }

    description = gemojiObject.description;
    name = gemojiObject.aliases[0];

    describe(unicode + '   ' + description, function () {
        gemojiObject.aliases.forEach(function (alias) {
            it('should be accessible by name (' + alias + ' > unicode)',
                function () {
                    assert(gemoji.name[alias] === unicode);
                }
            );
        });

        it('should get an alias by unicode (unicode > ' + name + ')',
            function () {
                assert(gemoji.unicode[unicode] === name);
            }
        );
    });
}

/**
 * Validate all crawled gemoji-objects.
 */

emoji.forEach(describeGemojiObject);
