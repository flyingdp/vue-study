import Vue from 'vue'
import App from './App'
import router from './router'
import Router from "vue-router";

//导入 ElementUI模块
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(ElementUI)
Vue.use(Router)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // 启用 ElementUI
  render: h => h(App)
})
