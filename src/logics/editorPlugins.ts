import { keymap, highlightSpecialChars, drawSelection, highlightActiveLine } from '@codemirror/view'
import { EditorState, Compartment } from '@codemirror/state'
import { history, historyKeymap } from '@codemirror/history'
import { foldGutter, foldKeymap } from '@codemirror/fold'
import { indentOnInput } from '@codemirror/language'
import { EditorView } from '@codemirror/basic-setup'
import { hoverTooltip } from '@codemirror/tooltip'
import { defaultKeymap, defaultTabBinding } from '@codemirror/commands'
import { bracketMatching } from '@codemirror/matchbrackets'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets'
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search'
import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
import { commentKeymap } from '@codemirror/comment'
import { rectangularSelection } from '@codemirror/rectangular-selection'
import { classHighlightStyle } from '@codemirror/highlight'
import { lintKeymap } from '@codemirror/lint'

import { usePrismCSS } from './usePrismCSS'

const tabSize = new Compartment()
export const basicSetup = [
  highlightActiveLine(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  EditorState.allowMultipleSelections.of(true),
  //  EditorView.editable.of(false),
  indentOnInput(),
  classHighlightStyle.fallback,
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  highlightSelectionMatches(),
  tabSize.of(EditorState.tabSize.of(2)),
  keymap.of([
    defaultTabBinding,
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...commentKeymap,
    ...completionKeymap,
    ...lintKeymap,
  ]),
]

export const hoverPreview = (processor: any) => {
  return [
    hoverTooltip((view, pos, side) => {
      const { from, to, text } = view.state.doc.lineAt(pos)
      let start = pos
      let end = pos
      while (start > from && /[^\s"';`]/.test(text[start - from - 1]))
        start--
      while (end < to && /[^\s"';`]/.test(text[end - from]))
        end++
      // eslint-disable-next-line no-mixed-operators
      if (start === pos && side < 0 || end === pos && side > 0)
        return null
      const word = text.slice(start - from, end - from)
      const result = processor.interpret(word)
      if (result.ignored.length > 0)
        return null
      return {
        pos: start,
        end,
        above: true,
        create() {
          const dom = document.createElement('div')
          const { highlightedCSS } = usePrismCSS(() => result.styleSheet.build())
          dom.className = 'text-sm border p-2 rounded !bg-gray-100'
          dom.innerHTML = `<pre><code>${highlightedCSS.value}</code></pre>`
          return { dom }
        },
      }
    }),
    EditorView.theme({
      '.cm-tooltip': {
        borderColor: 'var(--c-scrollbar)',
        background: 'var(--c-bg)',
      },
    }),
  ]
}
