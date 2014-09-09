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
    '| github | unicode | name | escaped unicode |\n' +
    '|:------:|:-------:|:----:|:---------------:|\n' +

    Object.keys(data).map(function (name) {
        return '|' +
            ' :' + name + ': | ' +
            data[name] + ' | ' +
            name + ' | ' +
            escape(data[name]) + ' |'
    }).join('\n') +

    '\n'
);
