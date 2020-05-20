import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Home from "../views/Home";
Vue.use(Router)
Vue.use(Login)
Vue.use(Home)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      // name: 'Home',
      component: Home
    }
  ]
})
