var fs = require('fs');

function escape(value) {
    return value.split('').map(function (character) {
        return '\\u' + character.charCodeAt(0).toString(16);
    }).join('');
}

var data = require('./data/gemoji.json');

fs.writeFileSync('Supported-Gemoji.md',
    'Supported Gemoji:\n' +
    '=================\n' +
    '\n' +
    'Note that this file does not contain the gemoji\'s as rendered by' +
    'GitHub; 870 small images would make viewing this document very slow.\n' +
    '\n' +
    '| unicode | name | escaped unicode |\n' +
    '|:-------:|:----:|:---------------:|\n' +

    Object.keys(data).map(function (name) {
        return '| ' +
            data[name] + ' | ' +
            name + ' | ' +
            escape(data[name]) + ' |'
    }).join('\n') +

    '\n'
);
