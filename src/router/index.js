import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@/config/env'

Vue.use(Router)

//vue异步组件和webpack的【代码分块点】功能结合，实现了按需加载
const HelloWorld = () => import('@/components/HelloWorld');
const Index = () => import('@/containers/Index');
const CultureNews = () => import('@/containers/CultureNews');

export default new Router({
  mode: routerMode || routerMode == '' ? routerMode : 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/CultureNews',
      name: 'CultureNews',
      component: CultureNews
    }
  ]
})
