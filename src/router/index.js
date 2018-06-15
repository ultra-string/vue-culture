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
*   特别策划 路由
*/
const SpecialScheme = () => import('@/containers/SpecialScheme');
/*
*   详情页 路由
*/
const Details = () => import('@/containers/Details');
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
*   隐私政策  路由
*/
const Personal = () => import('@/containers/Personal');

/*
*   使用条款  路由
*/
const UserRule = () => import('@/containers/UserRule');


/*
*   登录路由
*/
const LoginView = () => import('@/containers/LoginView');
const Login = () => import('@/components/sections/st-login');
const Register = () => import('@/components/sections/st-register');

/*
*   搜索框路由
*/
const SearchView = () => import('@/containers/SerchText');

/*
*   测试组件路由
*/
const Page404 = () => import('@/components/cm-test')
const Test = () => import('@/components/cm-test')



export default new Router({
  mode: routerMode || routerMode == '' ? routerMode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path : '/test',
      name : 'test',
      component : Test,
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
      path: '/Index',
      component: IndexRoute,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        // 特别策划路由
        {
          path: 'SpecialScheme',
          name: 'SpecialScheme',
          component: SpecialScheme
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
        // 隐私政策
        {
          name : 'Personal',
          path : 'Personal',
          meta : ['首页' , '隐私政策'],
          component : Personal
        },
        // 使用条款
        {
          name : 'UserRule',
          path : 'UserRule',
          meta : ['首页' , '使用条款'],
          component : UserRule
        },
        // 详情页
        {
          path: 'Details/:id',
          name: 'Details',
          component: Details
        },
        //搜索框
        {
          path : 'SearchView/:str',
          name : 'SearchView',
          component : SearchView
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
      path: '/404',
      name: '404',
      component: Page404
    }
  ]
})
