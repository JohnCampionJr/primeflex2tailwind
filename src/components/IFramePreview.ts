import { h, ref, defineComponent } from 'vue'

const srcdoc_default = `<!DOCTYPE html>
<html lang="en">
<body>
  <style>
    /** scrollbar style **/
    *::-webkit-scrollbar {
      background: transparent;
      width: 6px;
      height: 6px;
    }

    *::-webkit-scrollbar-thumb {
      transition: background .2s ease-in-out;
      background: transparent;
      border-radius: 9999px;
    }

    *::-webkit-scrollbar-corner {
      background: transparent;
    }

    *:hover::-webkit-scrollbar-thumb {
      background-color: #e4e4e7;
    }
    .dark *:hover::-webkit-scrollbar-thumb {
      background-color: #333;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: transparent;
      width: 100%;
      height: 100%;
      overflow: overlay;
    }
    body {
      padding: 12px;
    }
    #container {
      display: flex;
      align-items: center;
    }
  </style>
  <div id="container">
    Preview
  </div>
  <script>
    let styleEl, fixedStyleEl
    const container = document.getElementById('container')

    window.addEventListener('message', (e) => {
      const {
        css,
        fixedCss,
        classes,
        html,
      } = JSON.parse(e.data)

      // console.log({
      //   css,
      //   fixedCss,
      //   classes,
      // })

      if (css != null) {
        if (styleEl)
          document.body.removeChild(styleEl)
        styleEl = document.createElement('style')
        styleEl.innerHTML = css
        document.body.appendChild(styleEl)
      }

      if (fixedCss != null) {
        if (fixedStyleEl)
          document.body.removeChild(fixedStyleEl)
        fixedStyleEl = document.createElement('style')
        fixedStyleEl.innerHTML = fixedCss
        document.body.appendChild(fixedStyleEl)
      }

      if (classes != null)
        container.className = classes
      if (html != null)
        container.innerHTML = html
    }, false)
  <\/script>
</body>
</html>
`

export default defineComponent({
  name: 'IframePreview',
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    css: {
      type: String,
      default: '',
    },
    fixedCss: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    html: {
      type: String,
      default: 'Preview',
    },
  },
  setup(props) {
    onMounted(createSandBox)

    const container = ref<Element | null>(null)
    const isReady = ref(false)
    const propRefs = ref(props)

    let sandbox: any = null

    function createSandBox() {
      if (sandbox)
        container.value?.removeChild(sandbox)
      sandbox = document.createElement('iframe')
      sandbox.setAttribute('sandbox', [
        'allow-forms',
        'allow-modals',
        'allow-pointer-lock',
        'allow-popups',
        'allow-same-origin',
        'allow-scripts',
        'allow-top-navigation-by-user-activation',
      ].join(' '))
      sandbox.srcdoc = srcdoc_default
      sandbox.style.backgroundColor = 'transparent'
      container.value?.appendChild(sandbox)
      sandbox.addEventListener('load', () => {
        isReady.value = true
      })
    }
    for (const key of Object.keys(propRefs)) {
      watchEffect(() => {
        if (!isReady.value)
          return

        sandbox?.contentWindow?.postMessage(JSON.stringify({
        // @ts-ignore
          [key]: propRefs[key].value,
        }), location.origin)
      })
    }

    watchEffect(() => {
      if (!isReady.value)
        return

      sandbox?.contentWindow?.document?.querySelector('html')?.classList?.toggle('dark', props.dark)
    })
    return () => h('div', {
      ref: container,
      class: 'preview-container',
    })
  },
})
