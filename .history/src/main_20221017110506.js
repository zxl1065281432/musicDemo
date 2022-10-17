import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
const app = createApp(App)
app.use(store).use(router).mount('#app')