webpackJsonp([19],{"3VSP":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("R+i1"),n=a("WQTI"),i=a("mKMH"),r={name:"Notice",data:function(){return{path:this.$route.meta,dataList:[],resData:{},navTree:[{name:"首页",path:"CultureNews",url:"",nowPage:!1,isOuter:!1},{name:"公告",path:"CultureNews",url:"",nowPage:!1,isOuter:!1}]}},components:{CmNewsList:s.a,CmChangePage:n.a,CmBradcrumb:i.a},created:function(){this.changePage(1)},methods:{changePage:function(e){var t=this;this.$post("/body/page",{oneId:100,pageNo:e,pageSize:12,twoId:1003}).then(function(e){console.log(e),t.dataList=e.data.pageInfo.list,t.resData=e.data})}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"Notice"},[t("cm-bradcrumb",{staticStyle:{margin:"18px 0",lineHeight:"45px",fontSize:"19px"},attrs:{navTree:this.navTree}}),this._v(" "),t("cm-news-list",{attrs:{hasDate:!0,newsList:this.dataList,hasDashBorder:!0}}),this._v(" "),t("cm-change-page",{attrs:{pageNum:this.resData.pageNum,data:this.resData},on:{changePageFn:this.changePage}})],1)},staticRenderFns:[]};var c=a("VU/8")(r,o,!1,function(e){a("gvSg")},"data-v-3be9523d",null);t.default=c.exports},gvSg:function(e,t){}});
//# sourceMappingURL=19.55ca60e6af44be90722b.js.map