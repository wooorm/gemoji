/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').TableRow} TableRow
 */

import assert from 'node:assert/strict'
import {zone} from 'mdast-zone'
import {u} from 'unist-builder'
import {gemoji} from '../index.js'

/** @type {import('unified').Plugin<[], Root>} */
export default function support() {
  return (tree) => {
    zone(tree, 'support', (start, _, end) => [start, ...data(), end])

    function data() {
      const header = ['Emoji', 'Name(s)', 'Tags', 'Escaped Unicode']
      /** @type {Array<TableRow>} */
      const rows = [
        u(
          'tableRow',
          header.map((value) => u('tableCell', [u('text', value)]))
        )
      ]

      let index = -1
      while (++index < gemoji.length) {
        const info = gemoji[index]

        rows.push(
          u(
            'tableRow',
            [
              info.emoji,
              info.names.join('; '),
              info.tags.join('; '),
              escape(info.emoji)
            ].map((value) => u('tableCell', [u('text', value)]))
          )
        )
      }

      return [
        u('paragraph', [
          u('text', 'Gemoji supports ' + gemoji.length + ' emoji.')
        ]),
        u('table', {align: []}, rows)
      ]
    }

    /**
     * Escape a string into its unicode points.
     *
     * @param {string} value
     */
    function escape(value) {
      return value
        .split('')
        .map((character) => {
          const cp = character.codePointAt(0)
          assert(cp)
          return '\\u' + cp.toString(16)
        })
        .join('')
    }
  }
}
