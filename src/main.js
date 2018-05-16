// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css';
import '@/common/scss/element-variables.scss'
import router from './router'
// axios封装引入
import { fetch, post } from '@/axios/api'
// vuex 模块仓库
import store from './store/index'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' });

require ('@/common/scss/index.scss')

// post 请求使用 this.$post
Vue.prototype.$post = post;
// get 请求使用 this.$get
Vue.prototype.$get = fetch;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/* 发布评论日期 2018年1月12日 16:30 */
Vue.filter('getTimeMD', function(input) {
  function add0(m){return m<10?'0'+m:m }  
  function formatDate(needTime)  
  {  
     //needTime是整数，否则要parseInt转换  
       var time = new Date(needTime);  
       var y = time.getFullYear();  
       var m = time.getMonth()+1;  
       var d = time.getDate();  
       var h = time.getHours();  
      var mm = time.getMinutes();  
      var s = time.getSeconds();  
      return y+'年'+add0(m)+'月'+add0(d)+'日 '+add0(h)+':'+add0(mm)+':'+add0(s);  
  }  


  let time;
  if (input === '') {
    return '';
  } else {
    time = formatDate(Number(input));
  };
  return time;
})
