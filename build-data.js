'use strict';

var fs, data, map;

fs = require('fs');
data = require('./data/emoji.json');

function isEmoji(emojiObject) {
    return 'emoji' in emojiObject;
}

data = data.filter(isEmoji);

map = {};

data.forEach(function (emojiObject) {
    var unicodeEmoji = emojiObject.emoji;

    emojiObject.aliases.forEach(function (alias) {
        map[alias] = unicodeEmoji;
    });
});

fs.writeFileSync('data/gemoji.json', JSON.stringify(map));
