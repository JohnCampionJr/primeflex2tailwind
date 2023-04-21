<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import VRuntimeTemplate from 'vue3-runtime-template'
import { compileTemplate } from '@vue/compiler-sfc'
import { useWindiCSS } from '~/logics/useWindiCSS'

import { bps } from '~/logics/breakpoints'
import { html } from '~/data/playground'
import { layout } from '~/logics/playgroundLayout'
import { convertPrimeFlex } from '~/logics/convertPrimeFlex'

import 'splitpanes/dist/splitpanes.css'
// @windi whitelist: text-sm border p-2 rounded !bg-dark-300

const wConfig = {
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  preflight: false,
  theme: {
    extend: {
      borderRadius: {
        var: 'var(--border-radius)',
      },
      borderWidth: {
        3: '3px',
      },
      minWidth: {
        screen: '100vw',
      },
      spacing: {
        68: '17rem',
        76: '19rem',
        84: '21rem',
        88: '22rem',
        92: '23rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
      },
      transitionDuration: {
        400: '400ms',
        2000: '2000ms',
        3000: '3000ms',
      },
      transitionDelay: {
        400: '400ms',
      },
    },
  },
}

const bpmd = bps.greater('md')

const htmlCode = ref(html)
const secondCode = ref(html)
const styleCode = ref('')
const template = ref('<div style="background: grey;"><InputText/>&nbsp;</div>')
const {
  processor,
  generatedCSS,
} = useWindiCSS(secondCode, styleCode, wConfig)

watchEffect(() => {
  // check the template first
  const tempResult = compileTemplate({ source: htmlCode.value, id: 'internal', filename: 'internal' })
  if (tempResult.errors.length > 0) return
  secondCode.value = convertPrimeFlex(htmlCode.value)
  template.value = secondCode.value
  const element = document.getElementById('windi-dyn')
  if (element)
    element.innerHTML = generatedCSS.value
})

</script>

<template>
  <Header />
  <div class="pt-20">
    <div class="playground">
      <Splitpanes :horizontal="!bpmd || layout === 'bottom'" class="w-full h-full default-theme">
        <Pane v-if="layout === 'left'" min-size="20" :size="bpmd ? 40 : 33">
          <v-runtime-template :template="template"></v-runtime-template>
        </Pane>
        <Pane min-size="20" :size="bpmd ? 60 : 66">
          <Splitpanes :horizontal="layout !== 'bottom'">
            <Pane min-size="20">
              <PlayEditorBlock v-model="htmlCode" class="w-full h-full" title="PrimeFlex Code" :processor="processor" />
            </Pane>
            <Pane min-size="20">
              <PlayReadOnlyEditorBlock :updated-value="secondCode" class="w-full h-full" title="Tailwind CSS Code" :processor="processor" />
            </Pane>
          </Splitpanes>
        </Pane>
        <Pane v-if="layout !== 'left'" min-size="20" :size="bpmd ? 40 : 33">
          <div class="relative overflow-scroll h-full w-full surface-ground">
            <div class="block-title">
              <div class="w-full flex justify-between items-center">
                <span>Preview (Note: Media Breakpoints will not work here)</span>
              </div>
            </div>
            <div class="absolute inset-0 pt-12 p-4 h-full w-full">
              <v-runtime-template :template="template"></v-runtime-template>
            </div>
          </div>
        </Pane>
      </Splitpanes>
    </div>
  </div>
</template>

<style lang="postcss">
.playground {
  --c-bg: var(--windi-bg);
  --c-scrollbar: var(--windi-bc);
  @apply h-140vh p-4 bg-blue-gray-100 dark:bg-dark-800;
}
@screen md {
  .playground {
    height: calc(100vh - var(--header-height));
  }
}
.block-bg {
  @apply bg-white rounded-lg bg-opacity-90 dark:bg-dark-500;
}
.block-title {
  @apply pl-4 pr-2 pt-2 text-sm font-bold opacity-85 select-none;
}
.block-code {
  @apply absolute pt-2em inset-0 w-full h-full overflow-hidden rounded-b-lg;
}
.splitpanes.default-theme .splitpanes__pane {
  @apply bg-transparent;
}
.splitpanes.default-theme .splitpanes__splitter {
  @apply bg-transparent border-transparent min-w-4 min-h-4;
  &:before, &:after {
    @apply bg-gray-300 dark:bg-dark-300;
  }
  &:hover:before, &:hover:after {
    @apply bg-gray-400 dark:bg-dark-100;
  }
}
.CodeMirror {
  @apply px-3 py-2 h-full !bg-transparent font-mono text-sm;
}
.preview-container {
  width: 100%;
  height: 100%;
  border: none;
}

</style>
