import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@/config/env'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/containers/Login'

Vue.use(Router)

export default new Router({
  mode: routerMode ? routerMode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
