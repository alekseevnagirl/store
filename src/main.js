import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as components from '@/components'
import { createStore } from 'vuex'
import storeConfig from './store'

const store = createStore(storeConfig)

const app = createApp(App)

app.use(router)
app.use(store)

components.default.forEach((component) => {
  app.component(component.name, component)
})

app.mount('#app')
