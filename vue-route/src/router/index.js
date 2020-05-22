import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../views/Login'
import Home from "../views/Home";
import productInfo from "../views/productInfo";
import productList from '../views/ProductList'

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
      path: '/logout',
      name: 'logout',
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/productList',
          component: productList
        },
        {
          path: '/productInfo/:id',
          name:'productInfo',
          component: productInfo
        }
      ]
    }
  ]
})
