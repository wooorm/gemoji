'use strict';

var emoji, gemoji, assert;

emoji = require('../data/emoji.json');
gemoji = require('..');
assert = require('assert');

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

function describeGemojiObject(gemojiObject) {
    var unicode = gemojiObject.emoji,
        description = gemojiObject.description,
        name = gemojiObject.aliases[0];

    if (!unicode) {
        return;
    }

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

emoji.forEach(describeGemojiObject);
