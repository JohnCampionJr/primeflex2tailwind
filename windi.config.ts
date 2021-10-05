import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  preflight: false,
  exclude: [/^p-grid-/, /^p-col-/, /^p-mb-/, /^p-mr-/, /^p-ml-/, /^p-mt-/, /^<transition/],
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
})
