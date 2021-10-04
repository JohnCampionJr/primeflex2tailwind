// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import { setupPrimeVue } from './primevue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/vars.css'
import './styles/all.css'
import './styles/scrollbar.css'
import './styles/markdown.css'
import './styles/codemirror-prism-vars.css'
import './styles/main.css'
import 'virtual:windi-utilities.css'
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
setupPrimeVue(app)
app.mount('#app')
