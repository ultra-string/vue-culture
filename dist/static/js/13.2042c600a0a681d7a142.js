webpackJsonp([13],{KiEy:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("R+i1"),n=t("WQTI"),i=t("mKMH"),r={name:"Personal",data:function(){return{path:this.$route.meta,dataList:[],resData:{},navTree:[{name:"首页",path:"CultureNews",url:"",nowPage:!1,isOuter:!1},{name:"隐私政策",path:"CultureNews",url:"",nowPage:!1,isOuter:!1}]}},components:{CmNewsList:s.a,CmChangePage:n.a,CmBradcrumb:i.a},created:function(){this.changePage(1)},methods:{changePage:function(e){var a=this;this.$post("/body/page",{oneId:100,pageNo:e,pageSize:12,twoId:1001}).then(function(e){console.log(e),a.dataList=e.data.pageInfo.list,a.resData=e.data})}}},o={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"personal"},[a("cm-bradcrumb",{staticStyle:{margin:"18px 0",lineHeight:"45px",fontSize:"19px"},attrs:{navTree:this.navTree}}),this._v(" "),a("cm-news-list",{attrs:{hasDate:!0,newsList:this.dataList,hasDashBorder:!0}}),this._v(" "),a("cm-change-page",{attrs:{pageNum:this.resData.pageNum,data:this.resData},on:{changePageFn:this.changePage}})],1)},staticRenderFns:[]};var h=t("VU/8")(r,o,!1,function(e){t("YH+h")},"data-v-be52b8be",null);a.default=h.exports},"YH+h":function(e,a){}});
//# sourceMappingURL=13.2042c600a0a681d7a142.js.map