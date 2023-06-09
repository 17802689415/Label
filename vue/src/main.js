import { createApp } from 'vue'
import App from './App.vue'
import * as ElIconModules from '@element-plus/icons-vue'
import router from './router/router.js'
import store from './store/store.js'
import axios from '@/request/index.js'
import {createI18n} from 'vue-i18n/index.mjs'




const app = createApp(App)
app.use(router)
app.use(store)


const VueI18n = createI18n
const i18n = new VueI18n({
  locale:'en',
  messages:{
    'zh':require('@/i18n/zh.js').lang,
    'en':require('@/i18n/en.js').lang
  }
})

app.use(i18n)


axios.defaults.baseURL = ' http://localhost:8080'
app.config.globalProperties.$axios=axios
//引入icon
Object.keys(ElIconModules).forEach(function (key) {
    app.component(ElIconModules[key].name, ElIconModules[key])
  })


app.mount('#app')
