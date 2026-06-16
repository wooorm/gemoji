import fs from 'node:fs/promises'

const response = await fetch(
  'https://api.github.com/repos/github/gemoji/contents/db/emoji.json',
  {headers: {accept: 'application/vnd.github.v3.raw'}}
)

const body = await response.text()
fs.writeFile('emoji.json', body)
