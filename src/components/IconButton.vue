<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener"
    class="inline-flex text-xl p-2"
  >
    <slot />
  </a>
  <button v-else class="inline-flex text-xl p-2 border-0 bg-none bg-transparent">
    <slot />
  </button>
</template>
