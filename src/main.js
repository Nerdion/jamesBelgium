import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import "./icons"

const app = createApp(App).use(router)

app.use(router)

app.mount('#app')