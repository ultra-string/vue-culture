<template>
  <div class="culture-news-view" v-if="beReady">
    <cm-bradcrumb
    style="margin:18px 0;lineHeight: 45px;fontSize:19px"
    ref="breadcrumb"
    ></cm-bradcrumb>
    <div class="clearfix">
      <div class="culture-nav fl">
        <cm-part-nav
        :navTree="opations"
        @getBodyTitlePartProps="getBodyTitlePartProps"
        ></cm-part-nav>
      </div>
      <div class="culture-view fl">
        <!-- 测试 -->
        <div class="style-type" v-if="showType==0"></div>
        <!-- 横向专题 -->
        <div class="style-type" v-if="showType==0 || showType==1">
            <!-- <cm-arrow-list></cm-arrow-list> -->
            <cm-news-list
              :hasDate="true"
              :newsList="dataList"
              :hasDashBorder="true"
            ></cm-news-list>
        </div>
        <!-- 日期横向 -->
        <div class="style-type" v-if="showType==2">
          <cm-recruit
            :listArr="dataList"
          ></cm-recruit>
        </div>
        <!-- 宫格格式 -->
        <div class="style-type" v-if="showType==3">
          <cm-pic-list
            :dataList="dataList"
          ></cm-pic-list>
        </div>
      </div>
    </div>
    <cm-change-page
      :pageNum="resData.pageNum"
      :data="resData"
      @changePageFn="changePageFn"
    ></cm-change-page>
  </div>
</template>

<script>
import CmBradcrumb from '@/components/cm-breadcrumb';
import CmPartNav from '@/components/cm-part-nav';
import CmChangePage from '@/components/cm-change-page';
import CmArrowList from '@/components/cm-arrow-list';
import CmNewsList from '@/components/cm-news-list';
import CmRecruit from '@/components/cm-recruit';
import CmPicList from '@/components/cm-pic-list'

import ImportantNews from '@/containers/culture-news/ImportantNews';
import ExhibitionNews from '@/containers/culture-news/ExhibitionNews';
import Policy from '@/containers/culture-news/Policy';

export default {
  name: 'CultureNews',
  data () {
    return {
      resData : {},
      dataList : [],
      navTree: [],
      params : '',//query
      oneTitleId : '',//一级标题
      twoTitleId : '',
      showType : '',
      firstType : '',//投的样式
      opations : {},
      selectedKeyProp : 0,
      beReady : false,
      oneTitle : '',
      twoTitle : '',
      emitTwoId : '',
    }
  },
  components: {
    CmBradcrumb,
    CmPartNav,
    CmChangePage,
    CmArrowList,
    CmNewsList,
    CmRecruit,
    CmPicList,

    ImportantNews,
    ExhibitionNews,
    Policy
  },
  created(){
    this.initFn();
  },
  updated(){
    this.$refs.breadcrumb.getTree(this.oneTitle,this.twoTitle);
  },
  watch: {
    $route(to, from) {
      console.log(this.$route.query);
      if (to.fullPath != from.fullPath) {
        this.initFn();
      }
    }
  },
  methods : {
    initFn : function(){
      this.params = this.$route.query;
      this.oneTitleId = this.params.oneTitleId;//获取一级标题
      this.twoTitleId = this.params.twoTitleId ? this.params.twoTitleId : '';//获取一级标题
      this.showType = this.params.showType;
      this.firstType = this.params.showType;
      //pageNo:第几页;pageSize:一页几条数据;twoId二级标题id;oneId一级标题id
      this.getBodyTitle(1 , 12 , this.oneTitleId , this.twoTitleId);
      
      // console.log(this.resData)
    },
    getBodyTitle : function(pageNo , pageSize , oneId , twoId){
      //pageNo:第几页;pageSize:一页几条数据;twoId二级标题id;oneId一级标题id
      this.$post('/body/page', {
          pageNo:  +pageNo,
          pageSize: +pageSize,
          oneId: +oneId,
          twoId: twoId?+twoId:''
      }).then(res => {
          console.log(res);
          this.resData = res.data.pageInfo;
          this.dataList = res.data.pageInfo.list;
          this.oneTitle = '';
          this.twoTitle = '';
          res.data.currentTitles.forEach(function(item,index){
            switch(index){
              case 0:
              this.oneTitle = item;
              console.log(this.oneTitle)
              break;
              case 1:
              this.twoTitle = item;
              console.log(this.twoTitle)
              break;
            }
          },this)
          // console.log(this.$refs.breadcrumb)
            // this.$refs.breadcrumb.getTree(this.navTree);
          
          this.opations = res.data.titleVOs[0];
          // this.chooseTree();
          console.log(this.navTree)
          this.beReady = true;
          // console.log(this.dataList)
          // console.log(this.opations)
      })
    },
    getBodyTitlePartProps : function(pageNo , pageSize , oneId , twoId , showType ){
      //pageNo:第几页;pageSize:一页几条数据;twoId二级标题id;oneId一级标题id
      this.$post('/body/page', {
          pageNo:  +pageNo,
          pageSize: +pageSize,
          oneId: +oneId,
          twoId: twoId?+twoId:''
      }).then(res => {
        console.log(res);
          this.resData = res.data.pageInfo;
          this.emitTwoId = twoId;
          this.dataList = res.data.pageInfo.list;
          this.showType = showType;
          this.oneTitle = '';
          this.twoTitle = '';
          res.data.currentTitles.forEach(function(item,index){
            switch(index){
              case 0:
              this.oneTitle = item;
              break;
              case 1:
              this.twoTitle = item;
              break;
            }
          },this)
          // console.log(this.$refs)
            // this.$refs.breadcrumb.getTree(this.navTree);
          // console.log(this.navTree)
      })
    },
    changePageFn : function(page){
      //pageNo:第几页
      let pageNo = page;
      //pageSize:一页几条数据
      let pageSize = 12;
      //twoId二级标题id
      // let twoId = '';
      //oneId一级标题id
      let oneId = this.oneTitleId;
      this.$post('/body/page', {
          pageNo:  +pageNo,
          pageSize: +pageSize,
          oneId: +oneId,
          twoId: this.emitTwoId?+this.emitTwoId:''
      }).then(res => {
        console.log(res);
          this.resData = res.data.pageInfo;
          this.dataList = res.data.pageInfo.list;
          // console.log(this.dataList)
      })
    },
    chooseTree : function(){
      let oneId = this.params.oneTitleId;
      let twoId = this.params.twoTitleId;
      console.log(oneId,twoId)
      if(!twoId){
        this.selectedKeyProp = 0;
      }else{
        console.log(this.opations)
        this.opations.twoTitleVOs.forEach(function(item,index){
          if(item.id == twoId){
            this.selectedKeyProp = index;
          }

        },this);
        console.log(this.selectedKeyProp)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.culture-news-view{
  position: relative;
  .culture-nav{
    display:inline-block;
    margin-right: 28px;
  }
  .culture-view {
    display: inline-block;
    width: 750px;
    margin-left: 2px;
  }
}
</style>