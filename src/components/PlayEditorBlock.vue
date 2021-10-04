<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type Processor from 'windicss'
import Editor from '../components/Editor'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  processor: {
    type: Object as PropType<Processor>,
    required: false,
  },
  title: {
    type: String,
    required: false,
    default: 'Template',
  },
})

const emit = defineEmits(['update:modelValue'])

const htmlCode = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v),
})
</script>

<template>
  <div class="block-bg relative">
    <div class="block-code">
      <Editor v-model="htmlCode" class="h-full w-full" language="html" :processor="processor" />
    </div>
    <div class="block-title">
      <div class="flex w-full justify-between items-center">
        <span>{{ props.title }}</span>
        <!-- <PlayToolsDropdown /> -->
      </div>
    </div>
  </div>
</template>
