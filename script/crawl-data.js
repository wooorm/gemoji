/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module gemoji:script:data
 * @fileoverview Transform data.
 */

'use strict';

/* Dependencies. */
var fs = require('fs');
var path = require('path');
var request = require('request');

request({
  timeout: 5000,
  url: 'https://api.github.com/repos/github/gemoji/contents/db/emoji.json',
  headers: {
    'User-Agent': 'request',
    Accept: 'application/vnd.github.v3.raw'
  }
}).pipe(fs.createWriteStream(path.join('data', 'emoji.json')));
