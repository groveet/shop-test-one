import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/bootstrap.min.css'
import './assets/styles/styles.css'
// import './assets/js/bootstrap.min'

createApp(App).use(store).use(router).mount('#app')
