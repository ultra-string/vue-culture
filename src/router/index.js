import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@/config/env'

Vue.use(Router)

//vue异步组件和webpack的【代码分块点】功能结合，实现了按需加载
const IndexRoute = () => import('@/containers/IndexRoute');
const Index = () => import('@/containers/Index');
/*
*   文旅资讯相关路由
*/
const CultureNewsIndex = () => import('@/containers/CultureNewsIndex');
const CultureNews = () => import('@/containers/culture-news/CultureNews');
const ImportantNews = () => import('@/containers/culture-news/ImportantNews');
const ExhibitionNews = () => import('@/containers/culture-news/ExhibitionNews');
const Policy = () => import('@/containers/culture-news/Policy');
/*
*   联系我们 路由
*/
const AboutUs = () => import('@/containers/AboutUs');

/*
*   公告 路由
*/
const Notice = () => import('@/containers/Notice');

/*
*   友情链接  路由
*/
const FriendShipLink = () => import('@/containers/FriendShipLink');

/*
*   招聘  路由
*/
const Recruit = () => import('@/containers/Recruit');

/*
*   登录路由
*/
const LoginView = () => import('@/containers/LoginView');
const Login = () => import('@/components/sections/st-login');
const Register = () => import('@/components/sections/st-register');

/*
*   微博测试路由
*/
const Weibo = () => import('@/components/sections/st-comment');
/*
*   招聘列表测试路由
*/
const RecruitTest = () => import('@/components/cm-recruit');

export default new Router({
  mode: routerMode || routerMode == '' ? routerMode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      //测试招聘列表路由
      name : 'RecruitTest',
      path : '/RecruitTest',
      component : RecruitTest
    },
    {
      path : '/login',
      component : LoginView,
      children: [
        {
          path: '',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/index',
      component: IndexRoute,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
         // 联系我们
        {
          path: 'AboutUs',
          name: 'AboutUs',
          meta: ['首页','关于我们'],
          component: AboutUs
        },
        // 公告
        {
          path: 'Notice',
          name: 'Notice',
          meta: ['首页','公告'],
          component: Notice
        },
        // 友情链接
        {
          name : 'FriendShipLink',
          path : 'FriendShipLink',
          meta : ['首页' , '友情链接'],
          component : FriendShipLink
        },
        // 招聘
        {
          name : 'Recruit',
          path : 'Recruit',
          meta : ['首页' , '招聘'],
          component : Recruit
        },
        {
          path: '/CultureNewsIndex',
          component: CultureNewsIndex,
          children: [
            {
              path: '',
              name: 'CultureNews',
              component: CultureNews
            },
            {
              path: 'ImportantNews',
              name: 'ImportantNews',
              component: ImportantNews
            },
            {
              path: 'ExhibitionNews',
              name: 'ExhibitionNews',
              component: ExhibitionNews
            },
            {
              path: 'Policy',
              name: 'Policy',
              component: Policy
            }
          ]
        }
      ]
    },
    {
      name : 'Weibo',
      path : '/Weibo',
      component : Weibo
    }
  ]
})
