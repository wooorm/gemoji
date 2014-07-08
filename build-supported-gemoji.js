var fs = require('fs');

function unescape(value) {
    return value.replace(/\\u([\d\w]{4})/gi, function ($0, $1) {
        return String.fromCharCode(parseInt($1, 16));
    });
}

fs.writeFileSync('Supported-Gemoji.md',
    'Supported Gemoji:\n' +
    '=================\n' +
    '\n' +
    '| github | unicode | name | escaped unicode |\n' +
    '|:------:|:-------:|:----:|:---------------:|\n' +

    fs.readFileSync('./index.js', 'utf-8')

        // Remove start.
        .replace(/[\s\S]+?gemoji = \(\n/, '')

        // Remove end.
        .replace(/\n\)[\s\S]+/, '')

        .split('\n')
        .map(function (row) {
            row = row
                // Remove start.
                .replace(/[\s\S]+?'/, '')

                // Remove end.
                .replace(/\|?'[\s\S]*/, '')
                // split.
                .split('|')

            return '| :' + row[0] + ': | ' + unescape(row[1]) + ' | ' + row[0] + ' | ' + row[1] + ' |'
        })
        .join('\n') +

    '\n'
);
