webpackJsonp([1],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"App"},o,!1,function(t){e("o8nZ")},null,null).exports,r=e("/ocq");var i=e("Dd8w"),c=e.n(i),u=e("NYxO"),d={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:c()({},Object(u.b)(["sessionId"])),created:function(){this.$post("/finsuitPhone/deal",{head:{TYPE:"GET_INDEX",SESSION_ID:"",TOKEN:"",DEVICE_ID:""},param:{}}).then(function(t){console.log(t)})}},p={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"demo"},[a("div",{staticClass:"nav"},[t._v("我只是个假demo")]),t._v(" "),a("aside",[t._v("我是一个骄傲的aside")]),t._v(" "),a("div",{staticClass:"btn"},[t._v("我是桂胖子，点我点我")]),t._v(" "),a("div",[t._v("sessionID: "+t._s(t.sessionId))]),t._v(" "),a("img",{attrs:{src:e("lblK"),alt:""}}),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"bg"})])}]};var f=e("VU/8")(d,p,!1,function(t){e("a9v6")},"data-v-385c2af8",null).exports,l=e("mvHQ"),m=e.n(l),v=e("//Fk"),_=e.n(v),h=e("mtWM"),I=e.n(h),E=e("bOdI"),S={state:{sessionId:""},getters:{sessionId:function(t){return t.sessionId}},actions:{SESSION_ID:function(t,n){(0,t.commit)("SESSION_ID",n)}},mutations:e.n(E)()({},"SESSION_ID",function(t,n){t.sessionId=n})};a.a.use(u.a);var g=new u.a.Store({modules:{common:S}});I.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",I.a.defaults.baseURL="https://finsuitdev.udomedia.com.cn/finsuit",I.a.interceptors.request.use(function(t){return t},function(t){return _.a.reject(t)}),I.a.interceptors.response.use(function(t){return g.dispatch("SESSION_ID",t.data.head.SESSION_ID),t},function(t){return _.a.reject(t)});var O={name:"HelloWorld",data:function(){return{msg:"Login Component"}},computed:c()({},Object(u.b)(["sessionId"])),created:function(){}},D={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"demo"},[this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var N=e("VU/8")(O,D,!1,function(t){e("Rd8E")},"data-v-f95367f2",null).exports;a.a.use(r.a);var b=new r.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:f},{path:"/login",name:"Login",component:N}]});a.a.config.productionTip=!1,e("zO3H"),a.a.prototype.$post=function(t){var n=function(t){var n={head:{SESSION_ID:"",TOKEN:"",DEVICE_ID:"",SYSTEM_TYPE:"h5",VERSION:""},param:{}};for(var e in n.head.TYPE=t.head.TYPE,t.param)n.param[e]=t.param[e];return"param_key="+m()(n)}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return new _.a(function(e,a){I.a.post(t,n).then(function(t){e(t.data)}).catch(function(t){a(t)})})},a.a.prototype.$get=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new _.a(function(e,a){I.a.get(t,{params:n}).then(function(t){e(t.data)}).catch(function(t){a(t)})})},new a.a({el:"#app",router:b,store:g,components:{App:s},template:"<App/>"})},Rd8E:function(t,n){},a9v6:function(t,n){},lblK:function(t,n,e){t.exports=e.p+"static/img/demo.d511f67.png"},o8nZ:function(t,n){},zO3H:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.c99413e236777c7bde5f.js.map