/*
*   axios基本配置、请求拦截器、相应拦截器
*
*/
// axios 引入
import axios from 'axios'
// vuex 仓库引入
import store from '@/store/index'
// baseUrl引入： 
import { baseUrl } from '@/config/env'
// 工具函数引入
import Lib from '@/common/lib/lib'

var Env;

if (process.env.NODE_ENV == 'development') {
	Env = '/apis'
}else{
	Env = baseUrl
}

// axios.defaults.headers.post['Content-Type'] = 'Content-Type: application/json'
// baseURL配置
// axios.defaults.baseURL = baseUrl


const server = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  // headers: {'Content-Type': 'Content-Type: application/json'}
  // headers: {
  //   Authorization:`Bearer ${store.state.user.token}`
  // }
});

const authServer = axios.create({
  baseURL: baseUrl,
  timeout: 10000
});
const authdServer = axios.create({
  baseURL: 'http://118.190.152.1:8084',
  timeout: 10000
});




// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function(response) {
    // 在相应中拦截 sessionId 
    // store.dispatch('SESSION_ID', response.data.head.SESSION_ID)
    // console.log(response)
    // if(response.config.headers.Authorization && response.config.headers.Authorization.length> 7) {
    //   store.dispatch('STORE_TOKEN', response.data.data);
    // }
    return response
}, function(error) {
    return Promise.reject(error)
})


/*
*   axios的get请求
*   @params  url
*   @params  params
*   @returns {Promise}
*/
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    // get 请求
    
    // url = `${url}${Lib.json2url(params)}`
    server.get(`/backend${url}`, {
      headers: {
        Authorization:`Bearer ${store.state.user.token}`
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    })
  })
}
  
/*
*   axios的post请求
*   @params  url
*   @params  params
*   @returns {Promise}
*/
export function post(url, params = {}) {
  let request = JSON.stringify(params);
  console.log(typeof request)
  return new Promise((resolve, reject) => {
    // post请求
    axios({
      method: 'post',
      url: `${baseUrl}/backend${url}`,
      data: params,
      headers: {
        Authorization:`Bearer ${store.state.user.token}`
      }
    })
    // axios.post(url, request)
      .then(response => {
        console.log(response)
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

/*
*   axios的post请求
*   @params  url
*   @params  params
*   @returns {Promise}
*/
export function auth(url, params = {}) {
  let request = JSON.stringify(params);
  console.log(typeof request)
  return new Promise((resolve, reject) => {
    // post请求
    axios({
      method: 'post',
      url: `${Env}${url}`,
      data: params
    })
    // axios.post(url, request)
      .then(response => {
        console.log(response)
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export function author(url, params = {}) {
  return new Promise((resolve, reject) => {
    // get 请求
    
    authServer.get(`/backend${url}`, {
      headers: {
        Authorization:`Bearer ${store.state.user.token}`
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    })
  })
}

export function authored(url, params = {}) {
  return new Promise((resolve, reject) => {
    // get 请求
    authdServer.get(`${url}`, {
      headers: {
        Authorization:`Bearer ${store.state.user.token}`
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    })
  })
}