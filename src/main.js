// main.js or main.ts
import { createApp } from 'vue'
import App from './App.vue'
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShieldHeart, faUserTie, faChartPie, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import router from './router/index.js'
import './style/css/theme.css'

library.add(faShieldHeart, faUserTie, faChartPie, faQuoteLeft)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
