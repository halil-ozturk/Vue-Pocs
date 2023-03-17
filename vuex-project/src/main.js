import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import { store } from './store/store'
import 'vuetify/styles'
import './assets/main.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    ssr: true, directives, components
})

createApp(App).use(store).use(vuetify).mount('#app')
