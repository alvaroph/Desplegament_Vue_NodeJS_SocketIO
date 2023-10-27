/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

import VueSocketIO from 'vue-3-socket.io'

app.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3001',

   
}))
