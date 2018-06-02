<template>
  <div id="app">
    <st-top-nav></st-top-nav>
    <div class="root-view">
      <st-top-logo></st-top-logo>
      <cm-top-nav-ele
      :options="options"
      :bannerHead="bannerHead"
      ></cm-top-nav-ele>
      <router-view></router-view>
    </div>
    <st-foot-qrcode
      :mark="mark"
    ></st-foot-qrcode>
    <st-foot-nav></st-foot-nav>
    <!-- <st-right-adv
      :advArr="advArr"
    ></st-right-adv> -->
  </div>
</template>

<script>
import StTopNav from '@/components/sections/st-top-nav';
import StTopLogo from '@/components/sections/st-top-logo';
import CmTopNavEle from '@/components/cm-top-nav-ele';
import StFootQrcode from '@/components/sections/st-foot-qrcode';
import StFootNav from '@/components/sections/st-foot-nav';
import StRightAdv from '@/components/sections/st-right-adv';

import Lib from '@/common/lib/lib.js'

export default {
  name: 'App',
  data() {
    return {
      options: [],
      bannerHead : [],
      mark : [],
      advArr : [],
    }
  },
  components: {
    StTopNav,
    StTopLogo,
    CmTopNavEle,
    StFootNav,
    StFootQrcode,
    StRightAdv,
  },
  created() {
    //获取标题
    this.$get('/index').then(res => {
      console.log(res.data);
      //处理轮播数据
      let bannerArr = res.data.titleLinkMap[4];
      this.bannerHead = this.changeArr(0,0,5,bannerArr);
      //二维码
      this.mark = res.data.titleLinkMap[3];

      let _this = this;
      res.data.titleVOs.forEach(function(item, index){
        if(!item.isLink){
          _this.options.push(item);
        }else{
          _this.advArr.push(item);
        }
      })
      // console.log('==',this.advArr)
    })
    // this.options = sessionStorage.getItem("TITLE_NAV").split('-');
    // this.options.map(function(item,index){
    //   item = JSON.parse(item);
    //   return item;
    // })
    // console.log(this.options)

    // let aaa = Lib.changeCase('aaaaa',1);
    // console.log(aaa)
    // let page = 10;
    // this.$get(`/body/${page}`)
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
    // this.$post('/body/page/oneId',{
    //   pageNo:1,
    //   pageSize:2,
    //   twoId:1,
    //   oneId:10
    // })
    // .then(res => {
    //   console.log(res)
    // })
    // .catch( err => {
    //   console.log(err);
    // })
  },
  methods : {
    //处理一二级标题
    chooseTitleNameFn : function(){
      var titleOv = this.totalList.titleVOs;
      let _this = this;
      titleOv.forEach(function(item , index){
        switch (item.oneTitleName){
          case "首页":
            _this.indexTitleArr = item;
            //存标题导航
            sessionStorage.setItem("indexTitleArr", JSON.stringify(item));
          break;
          case "文旅咨询":
            _this.cultureTitleArr = item;
            //存标题导航
            sessionStorage.setItem("cultureTitleArr", JSON.stringify(item));
          break;
          case "匠人匠心":
            _this.workerTitleArr = item;
            //存标题导航
            sessionStorage.setItem("workerTitleArr", JSON.stringify(item));
          break;
          case "艺迷社区":
            _this.arrTitleArr = item;
            //存标题导航
            sessionStorage.setItem("arrTitleArr", JSON.stringify(item));
          break;
          case "美食天下":
            _this.foodTitleArr = item;
            //存标题导航
            sessionStorage.setItem("foodTitleArr", JSON.stringify(item));
          break;
          case "非遗中国":
            _this.chinaTitleArr = item;
            //存标题导航
            sessionStorage.setItem("chinaTitleArr", JSON.stringify(item));
          break;
          case "非遗研培":
            _this.studyTitleArr = item;
            //存标题导航
            sessionStorage.setItem("studyTitleArr", JSON.stringify(item));
          break;
          case "特别策划":
            _this.specialTitleArr = item;
            //存标题导航
            console.log()
            sessionStorage.setItem("specialTitleArr", JSON.stringify(item));
          break;
          // case "中国手艺网电商":
          //   this.indexTitleArr = item;
          // break;
          // case "传统工艺振兴":
          //   this.indexTitleArr = item;
          // break;
          // case "研修研培":
          //   this.indexTitleArr = item;
          // break;
        }
      })
    },
    //根据格式处理数组方法
    changeArr: function(del, from, to, newArr) {
      var arr = [];
      //去掉删除的
      to += del;
      //test
      if (to > newArr.length) {
        to = newArr.length;
      }
      from += del;
      if (from > newArr.length) {
        return arr;
      }
      //取值
      for (var i = from; i < to; i++) {
        arr.push(newArr[i]);
      }
      return arr;
      console.log(arr);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.root-view{
  width:1000px;
  height: 100%;
  min-height: 100%;
  margin:0 auto;
  min-width: 1000px; 
  //width:expression(document.body.clientWidth < 1000? "1000px": "auto" ); 
}
</style>
