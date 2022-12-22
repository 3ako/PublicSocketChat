import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-3-socket.io'
import './assets/main.css'

const app = createApp(App)
const socket = new VueSocketIO({
    debug: false,
    connection: '',
})
app.use(socket)
app.mount('#app')
