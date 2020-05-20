import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import Header from './components/Header.vue';
import Content from "./components/Content";
import Bottom from "./components/Bottom";

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.component("MyHeader",Header);
Vue.component("MyContent",Content);
Vue.component("MyBottom",Bottom);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
