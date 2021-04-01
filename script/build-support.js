import zone from 'mdast-zone'
import u from 'unist-builder'
import {gemoji} from '../index.js'

export default function support() {
  return transformer
}

function transformer(tree) {
  zone(tree, 'support', replace)

  function replace(start, nodes, end) {
    return [start].concat(data()).concat(end || [])
  }

  function data() {
    return [
      u('paragraph', [
        u('text', 'Gemoji supports ' + gemoji.length + ' emoji.')
      ]),
      table()
    ]
  }

  function table() {
    var header = ['Emoji', 'Name(s)', 'Tags', 'Escaped Unicode']

    return u(
      'table',
      {align: []},
      [
        u(
          'tableRow',
          header.map((value) => u('tableCell', [u('text', value)]))
        )
      ].concat(
        gemoji.map(function (info) {
          return u(
            'tableRow',
            [
              info.emoji,
              info.names.join('; '),
              info.tags.join('; '),
              escape(info.emoji)
            ].map((value) => u('tableCell', [u('text', value)]))
          )
        })
      )
    )
  }

  // Escape a string into its unicode points.
  function escape(value) {
    return value
      .split('')
      .map(function (character) {
        return '\\u' + character.charCodeAt(0).toString(16)
      })
      .join('')
  }
}
