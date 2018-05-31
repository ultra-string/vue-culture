<template>
  <div class="indexPage">
    <!-- <img :src="totalList.titleLinkMap[4][0].url" alt=""> -->
    <cm-swiper
      class="swiper"
      :baseData="baseData"
      :height="220"
      :width="1000"
    ></cm-swiper>
    <div class="top-new-line clearfix" v-if="totalList.titleLinkMap[1] && totalList.titleLinkMap[1].length != 0" :key="k">
      <h1 v-if="totalList.titleLinkMap[1][0]">{{totalList.titleLinkMap[1][0].name}}</h1>
      <!-- <p class="fl"  v-if="totalList.titleLinkMap[1][1]">{{totalList.titleLinkMap[1][1].name}}</p>
      <p class="fr"  v-if="totalList.titleLinkMap[1][2]">{{totalList.titleLinkMap[1][2].name}}</p> -->
      <p class="fl"  v-if="totalList.titleLinkMap[1][1]">{{totalList.titleLinkMap[1][1].name}}</p>
      <p class="fr"  v-if="totalList.titleLinkMap[1][2]">{{totalList.titleLinkMap[1][2].name}}</p>
    </div>
    <!-- 头部swiper的行 -->
    <div class="clearfix swiper-line">
      <cm-swiper
      class="swiper fl"
      :baseData="baseData"
      :height="330"
      ></cm-swiper>
      <div class="fl">
        <cm-title-nav
        :oneTitle="'文旅资讯'"
        :secondTitle="cultureTitleArr.twoTitleVOs.length > 3 ? [cultureTitleArr.twoTitleVOs[0],cultureTitleArr.twoTitleVOs[1],cultureTitleArr.twoTitleVOs[2]] : cultureTitleArr.twoTitleVOs"
        :showType="cultureTitleArr.showType"
        :treeType="'cultureTitleArr'"
        ></cm-title-nav>
        <div class="clearfix">
          <div class="fl left">
            <cm-thumbnail
            :width="230"
            :height="135"
            :title="totalList.travelConsultings[0].bodyTitle"
            :isTitle="true"
            :src="totalList.travelConsultings[0].thumbnailUrl"
            ></cm-thumbnail>
            <ul>
              <li>
                <cm-news-list
                :newsList="cultureListLeft"
                :hasHotPoint="true"
                ></cm-news-list>
              </li>
            </ul>
          </div>
          <div class="fl">
            <cm-thumbnail
            :width="230"
            :height="135"
            :title="totalList.travelConsultings[1].bodyTitle"
            :isTitle="true"
            :src="totalList.travelConsultings[1].thumbnailUrl"
            ></cm-thumbnail>
            <ul>
              <li>
                <cm-news-list
                :newsList="cultureListRight"
                :hasHotPoint="true"
                ></cm-news-list>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 特别策划 -->
    <!-- <div class="specialPlan">
      <cm-title-nav
      oneTitle="特别策划"
      :secondTitle="specialTitleArr.twoTitleVOs.length > 3 ? [specialTitleArr.twoTitleVOs[0],specialTitleArr.twoTitleVOs[1],specialTitleArr.twoTitleVOs[2]] : specialTitleArr.twoTitleVOs"
      :showType="specialTitleArr.showType"
      :treeType="'specialTitleArr'"
      ></cm-title-nav>
      <div class="clearfix">
        <div class="fl clearfix">
          <cm-thumbnail
            class="fl"
            :width="230"
            :height="135"
            :title="totalList.specialPlannings[0].bodyTitle"
            :isTitle="true"
            :src="totalList.specialPlannings[0].thumbnailUrl"
            ></cm-thumbnail>
            <ul class="fl">
              <li>
                <cm-news-list
                :newsList="specialListLeft"
                :hasHotPoint="true"
                :delNum="2"
                ></cm-news-list>
              </li>
            </ul>
        </div>
        <div class="fr clearfix">
          <cm-thumbnail
            class="fl"
            :width="230"
            :height="135"
            :title="totalList.specialPlannings[1].bodyTitle"
            :isTitle="true"
            :src="totalList.specialPlannings[1].thumbnailUrl"
            ></cm-thumbnail>
            <ul class="fl">
              <li>
                <cm-news-list
                :newsList="specialListRight"
                :hasHotPoint="true"
                ></cm-news-list>
              </li>
            </ul>
        </div>
      </div>
    </div> -->
    <!-- 匠人匠心 -->
    <div class="craftsman">
      <cm-title-nav
      oneTitle="匠人匠心"
    :secondTitle="workerTitleArr.twoTitleVOs.length > 3 ? [workerTitleArr.twoTitleVOs[0],workerTitleArr.twoTitleVOs[1],workerTitleArr.twoTitleVOs[2]] : workerTitleArr.twoTitleVOs"
      :showType="workerTitleArr.showType"
      :treeType="'workerTitleArr'"
      ></cm-title-nav>
      <div class="clearfix">
        <div class="left fl clearfix">
          <cm-thumbnail
          :width="230"
          :height="135"
          :isTitle="true"
          :title="totalList.craftsmans[0].bodyTitle"
          class="fl"
          :src="totalList.craftsmans[0].imgUrl"
          ></cm-thumbnail>
          <cm-short-content
          class="fr list"
          ></cm-short-content>
        </div>
        <div class="fr">
          <cm-news-list
          :newsList="workerListRight"
          :hasHotPoint="true"
          :delNum="1"
          ></cm-news-list>
        </div>
      </div>
    </div>
    <!-- 艺迷社区 -->
    <div class="art-fan">
      <cm-title-nav
      oneTitle="艺迷社区"
      ></cm-title-nav>
      <div class="clearfix">
        <div class="one-row fl">
          <div class="clearfix video-list">
            <cm-thumbnail
            :width="230"
            :height="135"
            :isTitle="true"
            class="fl left"
            :title="totalList.artFanCommunitys[0].bodyTitle"
            :src="totalList.artFanCommunitys[0].imgUrl"
            ></cm-thumbnail>
            <cm-thumbnail
            :width="230"
            :height="135"
            :isTitle="true"
            class="fl"
            :title="totalList.artFanCommunitys[1].bodyTitle"
            :src="totalList.artFanCommunitys[1].imgUrl"
            ></cm-thumbnail>
          </div>
          <cm-news-list
          :newsList="arrtListLeft"
          :hasHotPoint="true"
          :delNum="2"
          class="news-list"
          ></cm-news-list>
        </div>
        <div class="one-row fr">
          <div class="clearfix video-list">
            <cm-thumbnail
            :width="230"
            :height="135"
            :isTitle="true"
            class="fl left"
            :title="totalList.artFanCommunitys[2].bodyTitle"
            :src="totalList.artFanCommunitys[2].imgUrl"
            ></cm-thumbnail>
            <cm-thumbnail
            :width="230"
            :height="135"
            :isTitle="true"
            class="fl"
            :title="totalList.artFanCommunitys[3].bodyTitle"
            :src="totalList.artFanCommunitys[3].imgUrl"
            ></cm-thumbnail>
          </div>
          <cm-news-list
          :newsList="arrtListRight"
          :hasHotPoint="true"
          class="news-list"
          ></cm-news-list>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <div class="img-adv clearfix">
      <div class="fl">
        <a href="">
          <img src="~@/common/images/demo.png" alt="">
        </a>
        <i>广告</i>
      </div>
      <div class="fr">
        <a href="">
          <img src="~@/common/images/demo.png" alt="">
        </a>
        <i>广告</i>
      </div>
    </div>
    <!-- 美食天下 -->
    <div class="food-world">
      <cm-title-nav
      oneTitle="美食天下"
      ></cm-title-nav>
      <div class="clearfix">
        <cm-thumbnail
        :width="480"
        :height="270"
        :isTitle="true"
        class="fl"
        :title="totalList.gourmetWorlds[0].bodyTitle"
        :src="totalList.gourmetWorlds[0].imgUrl"
        ></cm-thumbnail>
        <div class="fr right">
          <cm-thumbnail
          :width="235"
          :height="127"
          :isTitle="true"
          :isVideo="true"
          class="fl right-item"
          :title="totalList.gourmetWorlds[1].bodyTitle"
          :src="totalList.gourmetWorlds[1].imgUrl"
          ></cm-thumbnail>
          <cm-thumbnail
          :width="235"
          :height="127"
          :isTitle="true"
          :isVideo="true"
          class="fl right-item"
          :title="totalList.gourmetWorlds[2].bodyTitle"
          :src="totalList.gourmetWorlds[2].imgUrl"
          ></cm-thumbnail>
          <cm-thumbnail
          :width="235"
          :height="127"
          :isTitle="true"
          :isVideo="true"
          class="fl right-item"
          :title="totalList.gourmetWorlds[3].bodyTitle"
          :src="totalList.gourmetWorlds[3].imgUrl"
          ></cm-thumbnail>
          <cm-thumbnail
          :width="235"
          :height="127"
          :isTitle="true"
          :isVideo="true"
          class="fl right-item"
          :title="totalList.gourmetWorlds[4].bodyTitle"
          :src="totalList.gourmetWorlds[4].imgUrl"
          ></cm-thumbnail>
        </div>
      </div>
    </div>
    <!-- 非遗中国 -->
    <div class="heritage">
      <cm-title-nav
      oneTitle="非遗中国"
      :secondTitle="heritageTitle"
      ></cm-title-nav>
      <div class="clearfix list">
        <!-- for循环 4个 -->
        <div class="fl">
          <cm-thumbnail
          :width="230"
          :height="135"
          :isTitle="true"
          :title="totalList.inheritanceChinas[0].bodyTitle"
          :src="totalList.inheritanceChinas[0].imgUrl"
          ></cm-thumbnail>
          <ul>
            <li>
              <cm-news-list
              :newsList="chinaListOne"
              :hasHotPoint="true"
              :delNum="2"
              ></cm-news-list>
            </li>
          </ul>
        </div>
        <div class="fl">
          <cm-thumbnail
          :width="230"
          :height="135"
          :isTitle="true"
          :title="totalList.inheritanceChinas[1].bodyTitle"
          :src="totalList.inheritanceChinas[1].imgUrl"
          ></cm-thumbnail>
          <ul>
            <li>
              <cm-news-list
              :newsList="chinaListTwo"
              :hasHotPoint="true"
              :delNum="2"
              ></cm-news-list>
            </li>
          </ul>
        </div>
        <div class="fl">
          <cm-thumbnail
          :width="230"
          :height="135"
          :isTitle="true"
          :title="totalList.inheritanceChinas[2].bodyTitle"
          :src="totalList.inheritanceChinas[2].imgUrl"
          ></cm-thumbnail>
          <ul>
            <li>
              <cm-news-list
              :newsList="chinaListTree"
              :hasHotPoint="true"
              :delNum="2"
              ></cm-news-list>
            </li>
          </ul>
        </div>
        <div class="fl last">
          <cm-thumbnail
          :width="230"
          :height="135"
          :isTitle="true"
          :title="totalList.inheritanceChinas[3].bodyTitle"
          :src="totalList.inheritanceChinas[3].imgUrl"
          ></cm-thumbnail>
          <ul>
            <li>
              <cm-news-list
              :newsList="chinaListFour"
              :hasHotPoint="true"
              :delNum="2"
              ></cm-news-list>
            </li>
          </ul>
        </div>
      </div>
    </div>
     <!-- 非遗培研 -->
    <div class="research clearfix">
      <div class="fl list">
        <cm-title-nav
        oneTitle="非遗培研"
        :secondTitle="heritageTitle"
        ></cm-title-nav>
        <div>
          <div class="clearfix">
            <cm-thumbnail
            class="fl"
            :width="223"
            :height="135"
            title="匠人故事"
            :isTitle="true"
            ></cm-thumbnail>
            <cm-short-content
            class="fr content"
            ></cm-short-content>
          </div>
          <div>
            <cm-news-list
            :newsList="studyListLeft"
            :hasHotPoint="true"
            :delNum="2"
            ></cm-news-list>
          </div>
        </div>
      </div>
      <div class="fr">
        <cm-swiper
        class="swiper"
        :baseData="baseData"
        :height="256"
        ></cm-swiper>
      </div>
    </div>

  </div>
</template>

<script>
import Lib from '@/common/lib/lib.js'
import CmSwiper from '@/components/cm-swiper'
import CmTitleNav from '@/components/cm-title-nav'
import CmThumbnail from '@/components/cm-thumbnail'
import CmNewsList from '@/components/cm-news-list'
import CmShortContent from '@/components/cm-short-content'

export default {
  name: 'Index',
  data () {
    return {
      //res.data
      totalList : '',
      bodyList: {
        pageNo: 1,
        pageSize: 1,
        twoId: 1,
        oneId: 1
      },
      baseData: [
        {
          url: require('@/common/images/index/modelbg.png'),
          link: 'https://www.baidu.com'
        },
        {
          url: require('@/common/images/index/newUserAlert.png'),
          link: 'https://www.taobao.com'
        },
        {
          url: require('@/common/images/index/oldAlert.png'),
          link: 'https://www.souhu.com'
        }
      ],
      swiperLineNewTitle: [],
      // 特别策划数据
      specialPlanNewsList: [
        {
          title: '我是政策法规的标题啊！',
          date: '2018-7-20'
        },{
          title: '我是政策法规的标题啊！',
          date: '2018-7-20'
        },{
          title: '我是政策法规的标题啊！',
          date: '2018-7-20'
        },{
          title: '我是政策法规的标题啊！',
          date: '2018-7-20'
        }
      ], 
      // 匠人匠心数据
      craftsmanTitle: [
        {title: '手艺人专访', path: '/index'},
        {title: '手艺创新园', path: '/index'}
      ],
      // 非遗中国数据
      heritageTitle: [
        {title: '非遗数据', path: '/index'},
        {title: '大家说非遗', path: '/index'},
        {title: '热点关注', path: '/index'}
      ],
      cultureListLeft : [],//文旅左侧
      cultureListRight : [],//文旅右侧
      specialListLeft : [],//特别左侧
      specialListRight : [],//特别右侧
      workerListLeft : [],//匠人左侧
      workerListRight : [],//匠人右侧
      arrtListLeft : [],//艺迷左侧
      arrtListRight : [],//艺迷右侧
      foodListLeft : [],//美食左侧
      foodListRight : [],//美食右侧
      chinaListOne : [],//非遗中国1
      chinaListTwo : [],//非遗中国2
      chinaListTree : [],//非遗中国3
      chinaListFour : [],//非遗中国4
      studyListLeft : [],//非遗研培左侧
      studyListRight : [],//非遗研培右侧

      indexTitleArr : [],//首页标题
      cultureTitleArr : [],//文旅标题
      workerTitleArr : [],//匠人匠心标题
      arrTitleArr : [],//艺迷标题
      foodTitleArr : [],//美食标题
      chinaTitleArr : [],//非遗中国标题
      studyTitleArr : [],//非遗研培标题
      specialTitleArr : [],//特别策划标题

      
    }
  },
  components: {
    CmSwiper,
    CmTitleNav,
    CmThumbnail,
    CmNewsList,
    CmShortContent
  },
  created() {
    this.$get('/index')
    .then(res => {
      console.log(res);
      this.totalList = res.data;
      //假数据
      //文旅资讯
      //特别策划
      // console.log(this.totalList.specialPlannings[0].bodyTitle)
      // this.totalList.specialPlannings[0] = {};
      // this.totalList.specialPlannings[0].bodyTitle = '特别策划';
      // this.totalList.specialPlannings[0].imgUrl = require('@/common/images/demo.png');
      // this.totalList.specialPlannings[1] = {};
      // this.totalList.specialPlannings[1].bodyTitle = '特别策划';
      // this.totalList.specialPlannings[1].imgUrl = require('@/common/images/demo.png');
      //匠人匠心
      this.totalList.craftsmans[0] = {};
      this.totalList.craftsmans[0].bodyTitle = '匠人匠心';
      this.totalList.craftsmans[0].imgUrl = require('@/common/images/demo.png');
      //艺迷社区
      this.totalList.artFanCommunitys[0] = {};
      this.totalList.artFanCommunitys[0].bodyTitle = '艺迷社区';
      this.totalList.artFanCommunitys[0].imgUrl = require('@/common/images/demo.png');
      this.totalList.artFanCommunitys[1] = {};
      this.totalList.artFanCommunitys[1].bodyTitle = '艺迷社区';
      this.totalList.artFanCommunitys[1].imgUrl = require('@/common/images/demo.png');
      this.totalList.artFanCommunitys[2] = {};
      this.totalList.artFanCommunitys[2].bodyTitle = '艺迷社区';
      this.totalList.artFanCommunitys[2].imgUrl = require('@/common/images/demo.png');
      this.totalList.artFanCommunitys[3] = {};
      this.totalList.artFanCommunitys[3].bodyTitle = '艺迷社区';
      this.totalList.artFanCommunitys[3].imgUrl = require('@/common/images/demo.png');
      //中国美食
      this.totalList.gourmetWorlds[0] = {};
      this.totalList.gourmetWorlds[0].bodyTitle = '中国美食';
      this.totalList.gourmetWorlds[0].imgUrl = require('@/common/images/demo.png');
      this.totalList.gourmetWorlds[1] = {};
      this.totalList.gourmetWorlds[1].bodyTitle = '中国美食';
      this.totalList.gourmetWorlds[1].imgUrl = require('@/common/images/demo.png');
      this.totalList.gourmetWorlds[2] = {};
      this.totalList.gourmetWorlds[2].bodyTitle = '中国美食';
      this.totalList.gourmetWorlds[2].imgUrl = require('@/common/images/demo.png');
      this.totalList.gourmetWorlds[3] = {};
      this.totalList.gourmetWorlds[3].bodyTitle = '中国美食';
      this.totalList.gourmetWorlds[3].imgUrl = require('@/common/images/demo.png');
      this.totalList.gourmetWorlds[4] = {};
      this.totalList.gourmetWorlds[4].bodyTitle = '中国美食';
      this.totalList.gourmetWorlds[4].imgUrl = require('@/common/images/demo.png');
      //非遗中国
      this.totalList.inheritanceChinas[0] = {};
      this.totalList.inheritanceChinas[0].bodyTitle = '非遗中国';
      this.totalList.inheritanceChinas[0].imgUrl = require('@/common/images/demo.png');
      this.totalList.inheritanceChinas[1] = {};
      this.totalList.inheritanceChinas[1].bodyTitle = '非遗中国';
      this.totalList.inheritanceChinas[1].imgUrl = require('@/common/images/demo.png');
      this.totalList.inheritanceChinas[2] = {};
      this.totalList.inheritanceChinas[2].bodyTitle = '非遗中国';
      this.totalList.inheritanceChinas[2].imgUrl = require('@/common/images/demo.png');
      this.totalList.inheritanceChinas[3] = {};
      this.totalList.inheritanceChinas[3].bodyTitle = '非遗中国';
      this.totalList.inheritanceChinas[3].imgUrl = require('@/common/images/demo.png');
      this.totalList.inheritanceChinas[4] = {};
      this.totalList.inheritanceChinas[4].bodyTitle = '非遗中国';
      this.totalList.inheritanceChinas[4].imgUrl = require('@/common/images/demo.png');





      // //文旅资讯二级标题
      // this.swiperLineNewTitle = res.data.travelConsultings.twoTitleVOs;
      // let wordGuidId = res.data.travelConsultings.id;
      // //获取文旅资讯的信息
      // this.$post('/body/page' , {
      //   //更换id
      //   "oneId": wordGuidId,
      //   "twoId": '',
      //   "pageNo": 1,
      //   "pageSize": 10,
      // }).then(res => {
      //   console.log(res)
      // })

      //根据类别处理数组
      this.changeListByType();
      //处理一二级标题
      this.chooseTitleNameFn();


    })
    .catch(err => {
      console.log(err)
    })


    // this.$post(`/body/page/oneId?${Lib.json2url(this.bodyList)}`)
    // .then(res => {
    //   console.log(res)
    // })
    // .catch( err => {
    //   console.log(err);
    // })
  }, 
  methods : {
    //跳转文旅资讯
    toCulureFn : function(){
      this.$router.push({
        path : '/CultureNewsIndex',
        query : {}
      })
    },
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
    //根据类别处理数组
    changeListByType : function(){
      //文旅
      this.cultureListLeft = this.changeArr(2,0,3,this.totalList.travelConsultings);
      this.cultureListRight = this.changeArr(2,4,7,this.totalList.travelConsultings);
      //特别策划
      this.specialListLeft = this.changeArr(2,0,3,this.totalList.specialPlannings);
      this.specialListRight = this.changeArr(2,4,7,this.totalList.specialPlannings);
      //匠人匠心
      this.workerListLeft = this.changeArr(2,0,3,this.totalList.craftsmans);
      this.workerListRight = this.changeArr(2,4,7,this.totalList.craftsmans);
      //艺迷社区
      this.arrtListLeft = this.changeArr(4,0,2,this.totalList.artFanCommunitys);
      this.arrtListRight = this.changeArr(4,3,5,this.totalList.artFanCommunitys);
      //美食天下
      // this.foodListLeft = this.changeArr(4,0,2,this.totalList.gourmetWorlds);
      // this.foodListRight = this.changeArr(4,3,5,this.totalList.gourmetWorlds);
      //非遗中国
      this.chinaListOne = this.changeArr(4,0,2,this.totalList.inheritanceChinas);
      this.chinaListTwo = this.changeArr(4,3,5,this.totalList.inheritanceChinas);
      this.chinaListTree = this.changeArr(4,6,8,this.totalList.inheritanceChinas);
      this.chinaListFour = this.changeArr(4,9,11,this.totalList.inheritanceChinas);
      //研培
      this.studyListLeft = this.changeArr(1,0,3,this.totalList.studyMatchs);
      this.studyListRight = this.changeArr(1,4,7,this.totalList.studyMatchs);
      // console.log(this.cultureLeftRight)
    },
    //根据格式处理数组方法
    changeArr : function(del , from , to , newArr){
      var arr = [];
      //去掉删除的
      to += del;
      //test
      if(to > newArr.length){to = newArr.length;}
      from += del;
      if(from > newArr.length){return arr;}
      //取值
      for(var i = from; i < to; i ++){
        arr.push(newArr[i]);
      }
      return arr;
      console.log(arr)
    },
    toUrlFn : function(url){
      window.open('https://' + url);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.indexPage{
  position: relative;
  margin-top : 60px;
  .top-new-line{
    width : 100%;
    height : 70px;
    margin : 20px auto;
    background : #f2f6f8;
    padding-top : 30px;
    text-align : center;
    color : #0b3c6c;
    h1{
      line-height : 30px;
      font-size : 30px;
    }
    p{
      line-height : 14px;
      font-size : 14px;
      margin-top : 10px;
    }
  }
  .swiper-line {
    margin: 42px 0 49px 0;
    .swiper{
      width: 488px;
      margin-right: 20px;
    }
    >div{
      width: 492px;
      >div{
        >div{
          width: 230px;
        }
        .left{
          margin-right: 30px;
        }
      }
    }
  }
  .specialPlan{
    >div{
      >div{
        width: 488px;
        ul{
          margin-left: 30px;
          width: 225px;
        }
      }
    }
  }
  .craftsman{
    margin: 42px 0 49px 0;
    >div{
      .left{
        width: 488px;
        .list{
          width: 232px;
        }
      }
      >div {
        width: 490px;
      }
    }
  }
  .art-fan{
    .one-row{
      width: 50%;
      .video-list{
        .left{
          margin-right: 25px;
        }
      }
    }
  }
  .img-adv{
    margin: 53px 0 60px 0;
    >div{
       position: relative;
       img{
        width: 488px;
        height: 100px;
        border: 1px solid #000;
      }
      i{
        position: absolute;
        top: 11px;
        right: 14px;
        width: 44px;
        line-height: 15px;
        font-size: 12px;
        text-align: center;
        background: #fff;
        color: #000;
        border-radius: 1px;
      }
    }
  }
  .food-world{
    .right{
      width: 516px;
      .right-item{
        margin: 0 0 15px 16px;
      }
    }
  }
  .heritage{
    margin: 60px 0 55px 0;
    .list{
      >div{
        width: 230px;
        margin-right: 26px;
      }
      .last{
        margin-right: 0;
      }
    }
  }
  .research{
    .list{
      width: 490px;
      div{
        .content{
          width: 237px;
        }
      }
    }
    .swiper{
        width: 490px;
        height: 264px; 
      }
  }

}
</style>
