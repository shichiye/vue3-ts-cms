import { createApp } from 'vue'

import App from './App.vue'

import 'normalize.css'
import './assets/css/index.less'
import router from './router'
import store from './store'
import { setupStore } from './store'

import 'element-plus/theme-chalk/base.css'

import * as ELIcons from '@element-plus/icons-vue'

const app = createApp(App)

for (const name in ELIcons) {
  app.component(name, (ELIcons as any)[name])
}

setupStore()
app.use(router)
app.use(store)
app.mount('#app')
