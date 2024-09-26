import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as components from '@/components'

const app = createApp(App);

components.default.forEach((component) => {
    app.component(component.name, component);
})

app.use(router).mount('#app')
