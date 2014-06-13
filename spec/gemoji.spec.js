'use strict';

var gemoji, assert, fs, inputs, outputs, iterator, input, output;

gemoji = require('..');
assert = require('assert');
fs = require('fs');

inputs = fs.readFileSync('./spec/input.txt', 'utf-8').split('\n');
outputs = fs.readFileSync('./spec/output.txt', 'utf-8').split('\n');

/* Remove last newline before EOF */
inputs.pop();
outputs.pop();

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

/* Convert escaped unicode characters into actual unicode characters. */
function unescapeUnicode($0, $1) {
    return String.fromCharCode(parseInt($1, 16));
}

iterator = -1;

while (inputs[++iterator]) {
    input = inputs[iterator].replace(/\\u([\d\w]{4})/gi, unescapeUnicode);

    output = outputs[iterator];

    describe('gemoji `' + output + '`', function () {
        it('should get the name of the gemoji (from `' + input + '` to `' +
            output + '`)', function () {
                assert(gemoji.name[output] === input);
            }
        );

        it('should get the gemoji from the name (from `' + output + '` to `' +
            input + '`)', function () {
                assert(gemoji.unicode[input] === output);
            }
        );
    });
}
