import { h, nextTick, ref, defineComponent } from 'vue'
import { EditorState, EditorView } from '@codemirror/basic-setup'
import { Extension } from '@codemirror/state'
import { lineNumbers } from '@codemirror/gutter'
import { ViewPlugin } from '@codemirror/view'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { basicSetup, hoverPreview } from './plugin'

export default defineComponent({
  name: 'Editor',
  props: {
    modelValue: {
      type: String,
      required: false,
      default: '',
    },
    language: {
      type: String,
      default: 'html',
    },
    lineNumbers: {
      type: Boolean,
      default: true,
    },
    updatedValue: {
      type: String,
      required: false,
    },
    options: Object,
    processor: Object,
  },
  emits: ['update:modelValue', 'editorDidMount'],
  setup(props, { emit }) {
    const root = ref<Element | undefined>()
    let view: EditorView | null = null
    let state: EditorState | undefined

    watch(
      () => props.updatedValue,
      (value) => {
        if (view === undefined || view === null) return
        view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: value } })
      },
    )

    const reactivePlugin = ViewPlugin.define((view2) => {
      return {
        update(update) {
          if (update.docChanged) {
            const value = view2.state.doc.toString()
            emit('update:modelValue', value)
          }
        },
      }
    })
    async function initEditor() {
      const extensions: Extension[] = [
        basicSetup,
        reactivePlugin,
      ]

      // if (props.processor)
      //   extensions.push(hoverPreview(props.processor))
      if (props.language === 'html')
        extensions.push(html())
      if (props.language === 'css')
        extensions.push(css())
      if (props.language === 'js')
        extensions.push(javascript())
      if (props.lineNumbers)
        extensions.push(lineNumbers())
      state = EditorState.create({
        doc: props.modelValue,
        extensions,
      })
      view = new EditorView({
        state,
        parent: root.value,
      })
    }
    onMounted(async() => {
      await nextTick(async() => {
        await initEditor()
      })
    })
    onUnmounted(() => {
      view?.destroy()
    })
    return () => h('div', {
      ref: root,
    })
  },
})
