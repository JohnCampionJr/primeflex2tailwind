<script setup lang="ts">
import VRuntimeTemplate from 'vue3-runtime-template'
import Editor from '../components/Editor'
import IFramePreview from '~/components/IFramePreview'
import { useWindiCSS } from '~/components/useWindiCSS'

const name = ref('')
const htmlCode = ref('')
const secondCode = ref('')
const styleCode = ref('')
const template = ref('<div style="background: grey;"><InputText/>&nbsp;</div>')
const router = useRouter()
const {
  processor,
  generatedCSS,
} = useWindiCSS(htmlCode, styleCode, undefined)

const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
watchEffect(() => {
  try {
    secondCode.value = htmlCode.value
    template.value = htmlCode.value
    const element = document.getElementById('windi-dyn')
    if (element)
      element.innerHTML = generatedCSS.value
  }
  finally {}
})
</script>

<template>
  <Editor v-model="htmlCode" :processor="processor"></Editor>
  <Editor :updated-value="secondCode" :line-numbers="false"></Editor>
  <div class="text-center text-gray-700 dark:text-gray-200">
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">Opinionated Vite Starter Template</em>
    </p>

    <div class="py-4" />
    <v-runtime-template :template="template"></v-runtime-template>

    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
