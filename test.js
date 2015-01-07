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
    it('should have an `unicode` property', function () {
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
 * @param {Array.<string>} gemojiObject.tags - List
 *   of tags.
 */

function describeGemojiObject(gemojiObject) {
    var unicode,
        information,
        description,
        aliases,
        tags,
        alias;

    unicode = gemojiObject.emoji;

    /**
     * Some gemoji, such as `octocat`, do not have a
     * unicode representation. Those are not present in
     * `gemoji`. Exit.
     */

    if (!unicode) {
        return;
    }

    description = gemojiObject.description;
    aliases = gemojiObject.aliases;
    tags = gemojiObject.tags;
    alias = aliases[0];

    information = gemoji.unicode[unicode];

    describe(unicode + '   ' + description, function () {
        aliases.forEach(function (name) {
            it('should be accessible by name (' + name + ' > object)',
                function () {
                    assert(gemoji.name[name].emoji === unicode);
                }
            );
        });

        it('should be accessible by emoji (' + unicode + '  > object)',
            function () {
                assert(gemoji.unicode[unicode].name === alias);
            }
        );

        describe('Information', function () {
            it('should have a `name` field', function () {
                assert(typeof information.name === 'string');

                assert(information.name === alias);
            });

            it('should have an `emoji` field', function () {
                assert(typeof information.emoji === 'string');

                assert(information.emoji === unicode);
            });

            it('should have a `description` field', function () {
                assert(typeof information.description === 'string');

                assert(information.description === description);
            });

            it('should have a `names` list', function () {
                assert(Array.isArray(information.names) === true);

                assert(information.names.length >= 1);

                information.names.forEach(function (name) {
                    assert(typeof name === 'string');

                    assert(aliases.indexOf(name) !== -1);
                });

                aliases.forEach(function (name) {
                    assert(information.names.indexOf(name) !== -1);
                });
            });

            it('should have a `tags` list', function () {
                assert(Array.isArray(information.tags) === true);

                information.tags.forEach(function (tag) {
                    assert(typeof tag === 'string');

                    assert(tags.indexOf(tag) !== -1);
                });

                tags.forEach(function (tag) {
                    assert(information.tags.indexOf(tag) !== -1);
                });
            });
        });
    });
}

/**
 * Validate all crawled gemoji-objects.
 */

emoji.forEach(describeGemojiObject);
