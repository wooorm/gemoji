/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module gemoji
 * @fileoverview Test suite for `gemoji`.
 */

'use strict';

/* eslint-env node, mocha */

/*
 * Dependencies.
 */

var assert = require('assert');
var emoji = require('./data/emoji.json');
var gemoji = require('./');

/*
 * Methods.
 */

var equal = assert.strictEqual;
var notEqual = assert.notStrictEqual;

/*
 * Tests.
 */

describe('gemoji', function () {
    it('should have a `name` property', function () {
        assert('name' in gemoji);
    });

    it('should have an `unicode` property', function () {
        assert('unicode' in gemoji);
    });
});

/**
 * Validate if a crawled gemoji is indeed (correctly)
 * present in this module.
 *
 * @param {Object} entry - Entry in gemoji.
 * @param {string} entry.emoji - Unicode
 *   representation.
 * @param {string} entry.description - Human
 *   description of the picture.
 * @param {Array.<string>} entry.aliases - List
 *   of names used by GitHub.
 * @param {Array.<string>} entry.tags - List
 *   of tags.
 */
function describeEntry(entry) {
    var unicode = entry.emoji;
    var description;
    var aliases;
    var tags;
    var alias;
    var information;

    /*
     * Some gemoji, such as `octocat`, do not have a
     * unicode representation. Those are not present in
     * `gemoji`. Exit.
     */

    if (!unicode) {
        return;
    }

    description = entry.description;
    aliases = entry.aliases;
    tags = entry.tags;
    alias = aliases[0];
    information = gemoji.unicode[unicode];

    describe(unicode + '   ' + description, function () {
        aliases.forEach(function (name) {
            it('should be accessible by name (' + name + ' > object)',
                function () {
                    equal(gemoji.name[name].emoji, unicode);
                }
            );
        });

        it('should be accessible by emoji (' + unicode + '  > object)',
            function () {
                equal(gemoji.unicode[unicode].name, alias);
            }
        );

        describe('Information', function () {
            it('should have a `name` field', function () {
                equal(typeof information.name, 'string');

                equal(information.name, alias);
            });

            it('should have an `emoji` field', function () {
                equal(typeof information.emoji, 'string');

                equal(information.emoji, unicode);
            });

            it('should have a `description` field', function () {
                equal(typeof information.description, 'string');

                equal(information.description, description);
            });

            it('should have a `names` list', function () {
                equal(Array.isArray(information.names), true);

                assert(information.names.length >= 1);

                information.names.forEach(function (name) {
                    equal(typeof name, 'string');

                    notEqual(aliases.indexOf(name), -1);
                });

                aliases.forEach(function (name) {
                    notEqual(information.names.indexOf(name), -1);
                });
            });

            it('should have a `tags` list', function () {
                equal(Array.isArray(information.tags), true);

                information.tags.forEach(function (tag) {
                    equal(typeof tag, 'string');

                    notEqual(tags.indexOf(tag), -1);
                });

                tags.forEach(function (tag) {
                    notEqual(information.tags.indexOf(tag), -1);
                });
            });
        });
    });
}

/*
 * Validate all crawled gemoji-objects.
 */

emoji.forEach(describeEntry);
