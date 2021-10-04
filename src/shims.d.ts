declare module 'vue3-runtime-template'

declare module 'splitpanes' {
  // eslint-disable-next-line import/no-duplicates
  import type { ComponentOptions } from 'vue'
  const Splitpanes: ComponentOptions
  const Pane: ComponentOptions
  export { Splitpanes, Pane }
}
