// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// axios封装引入
import { fetch, post } from '@/axios/api'
// vuex 模块仓库
import store from './store/index'

Vue.config.productionTip = false

import '@/common/scss/index.scss'

// post 请求使用 this.$post
Vue.prototype.$post = post;
// git 请求使用 this.$get
Vue.prototype.$get = fetch;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
