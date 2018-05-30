<template>
  <div class="culture-news-view">
    <cm-bradcrumb
    style="margin:18px 0;lineHeight: 45px;fontSize:19px"
    :navTree="navTree"
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
        <div class="style-type" v-if="showType==1">
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
      navTree: [
        {
          name: '首页',
              path: 'CultureNews',
              url: '',
              nowPage: false,
              isOuter: false
        },
        {
          name: '文旅资讯',
              path: 'CultureNews',
              url: '',
              nowPage: false,
              isOuter: false
        }
      ],
      ClutureNewsTree: [
        {
            name: '文旅资讯',
            path: 'CultureNews',
            url: '',
            nowPage: false,
            isOuter: false
        },{
            name: '要闻',
            path: 'ImportantNews',
            url: '',
            nowPage: true,
            isOuter: false
        },{
            name: '展讯',
            path: 'ExhibitionNews',
            url: '',
            nowPage: true,
            isOuter: false
        },{
            name: '政治法规',
            path: 'Policy',
            url: '',
            nowPage: true,
            isOuter: false
        }
      ],
      params : '',//query
      oneTitleId : '',//一级标题
      showType : '',
      firstType : '',//投的样式
      opations : '',
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
    this.params = this.$route.query;
    this.oneTitleId = this.params.oneTitleId;//获取一级标题
    this.showType = this.params.showType;
    this.firstType = this.params.showType;
    //pageNo:第几页;pageSize:一页几条数据;twoId二级标题id;oneId一级标题id
    this.getBodyTitle(1 , 12 , this.oneTitleId , '');
    this.chooseTree();
    // console.log(this.resData)
  },
  methods : {
    getBodyTitle : function(pageNo , pageSize , oneId , twoId){
      //pageNo:第几页;pageSize:一页几条数据;twoId二级标题id;oneId一级标题id
      this.$post('/body/page', {
          pageNo:  pageNo,
          pageSize: pageSize,
          oneId: oneId,
          twoId: twoId
      }).then(res => {
          // console.log(res);
          this.resData = res.data;
          this.dataList = res.data.list;
          // console.log(this.dataList)
      })
    },
    getBodyTitlePartProps : function(pageNo , pageSize , oneId , twoId , showType){
      //pageNo:第几页;pageSize:一页几条数据;twoId二级标题id;oneId一级标题id
      this.$post('/body/page', {
        pageNo:  pageNo,
          pageSize: pageSize,
          oneId: oneId,
          twoId: twoId
      }).then(res => {
        // console.log(res);
          this.resData = res.data;
          this.dataList = res.data.list;
          // console.log(this.dataList)
          this.showType = showType;
      })
    },
    changePageFn : function(page){
      //pageNo:第几页
      let pageNo = page;
      //pageSize:一页几条数据
      let pageSize = 12;
      //twoId二级标题id
      let twoId = '';
      //oneId一级标题id
      let oneId = this.oneTitleId;
      this.$post('/body/page', {
        pageNo:  pageNo,
          pageSize: pageSize,
          oneId: oneId,
          twoId: twoId
      }).then(res => {
        console.log(res);
          this.resData = res.data;
          this.dataList = res.data.list;
          // console.log(this.dataList)
      })
    },
    chooseTree : function(){
      console.log(this.params.treeType)
      switch (this.params.treeType){
        case "indexTitleArr":
          this.opations = JSON.parse(sessionStorage.getItem("indexTitleArr"));
        break;
        case "cultureTitleArr":
          this.opations = JSON.parse(sessionStorage.getItem("cultureTitleArr"));
        break;
        case "workerTitleArr":
          this.opations = JSON.parse(sessionStorage.getItem("workerTitleArr"));
        break;
        case "arrTitleArr":
          this.opations = JSON.parse(sessionStorage.getItem("arrTitleArr"));
        break;
        case "foodTitleArr":
          this.opations = JSON.parse(sessionStorage.getItem("foodTitleArr"));
        break;
        case "chinaTitleArr":
          this.opations = JSON.parse(sessionStorage.getItem("chinaTitleArr"));
        break;
        case "studyTitleArr":
          this.opations = JSON.parse(sessionStorage.getItem("studyTitleArr"));
        break;
        case "specialTitleArr":
          this.opations = JSON.parse(sessionStorage.getItem("specialTitleArr"));
        break;
      }
      console.log(this.opations)
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