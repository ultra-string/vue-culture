# web1000

> A Vue.js project

## 目录结构约定和命名规范
vue文件分为三种： 容器、业务组件（一次性组件）、功能组件

	容器: 由业务组件和功能组件拼接而成的页面，是路由跳转的根本单位，要求命名规范和路由命名一致。
	业务组件: 由功能组件拼接而成的为实现相关业务功能的元素，可以携带交互过程，要求命名规范和业务相关。组件命名以st-（section）开头
	功能组件: 具有一定功能，相对独立的组件，要求可复用、高内聚、低耦合。要求命名规范只突出具体功能并且与业务解耦: eg：ListItem.vue Cell.vue Item.vue等，另外要求组件命名以cm-（component）开头

## 命名规范
``` bash
# class ： 
全部小写，使用 - 连接  eg： nav-list
# 业务组件名： 
st-开头，全部小写， 使用 - 连接，放入components/sections下 eg: st-nav-list.vue
# 功能祖件名： 
cm-开头，全部小写， 使用 - 连接，放入components下 eg: cm-input.vue
# 页面名： 
驼峰命名，首字母大写，和路由path、name一致    eg： Index.vue
# 变量名： 
驼峰命名，首字母小写     
# 文件中： 
根元素class和class命名规范一致，组件name为根元素name的驼峰命名
# scss： 
命名同class命名规范
# 函数和方法 
添加多行的注释： /******/  作用、参数、默认值
# mixin： 
命名根据功能命名

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

