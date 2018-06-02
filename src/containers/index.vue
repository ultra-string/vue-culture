<template>
  <div class="indexPage">
    <div class="top-new-line clearfix" v-if="totalList.titleLinkMap[1] && totalList.titleLinkMap[1].length != 0">
      <h1 v-if="totalList.titleLinkMap[1][0]" class="hand-point" @click="toUrlFn(totalList.titleLinkMap[1][0].url)">{{totalList.titleLinkMap[1][0].name}}</h1>
      <p class="fl top-new-line-left hand-point" v-if="totalList.titleLinkMap[1][1]" @click="toUrlFn(totalList.titleLinkMap[1][1].url)">{{totalList.titleLinkMap[1][1].name}}</p>
      <p class="fr top-new-line-right hand-point" v-if="totalList.titleLinkMap[1][2]" @click="toUrlFn(totalList.titleLinkMap[1][2].url)">{{totalList.titleLinkMap[1][2].name}}</p>
    </div>
    <!-- 文旅资讯 -->
    <div class="clearfix swiper-line">
      <cm-swiper class="swiper fl" :baseData="bannerAmry" :height="330" :width="488"></cm-swiper>
      <div class="fl">
        <cm-title-nav :oneTitle="'文旅资讯'" :secondTitle="cultureTitleArr.twoTitleVOs.length > 3 ? [cultureTitleArr.twoTitleVOs[0],cultureTitleArr.twoTitleVOs[1],cultureTitleArr.twoTitleVOs[2]] : cultureTitleArr.twoTitleVOs"
          :showType="cultureTitleArr.showType" :treeType="'cultureTitleArr'"></cm-title-nav>
        <div class="clearfix flex-box">
          <cm-thumbnail v-if="totalList.travelConsultings[0]" :width="230" :height="135" :title="totalList.travelConsultings[0].bodyTitle"
            :isTitle="true" :src="totalList.travelConsultings[0].thumbnailUrl"></cm-thumbnail>
          <cm-thumbnail v-if="totalList.travelConsultings[1]" :width="230" :height="135" :title="totalList.travelConsultings[1].bodyTitle"
            :isTitle="true" :src="totalList.travelConsultings[1].thumbnailUrl"></cm-thumbnail>
          <div v-if="cultureList && cultureList.length" class="cm-news-list hand-point clearfix" v-for="(val, key) in cultureList"
            :key="key" @click="toDetail(val)">
            <i class="fl"></i>
            <h3 class="fl font-color">{{val.bodyTitle}}</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- 特别策划 -->
    <div class="specialPlan">
      <cm-title-nav
      :specialPath="'/Index/SpecialScheme'"
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
                class="font-color"
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
                class="font-color"
                ></cm-news-list>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <!-- 匠人匠心 -->
    <div class="craftsman">
      <cm-title-nav oneTitle="匠人匠心" :secondTitle="workerTitleArr.twoTitleVOs.length > 3 ? [workerTitleArr.twoTitleVOs[0],workerTitleArr.twoTitleVOs[1],workerTitleArr.twoTitleVOs[2]] : workerTitleArr.twoTitleVOs"
        :showType="workerTitleArr.showType" :treeType="'workerTitleArr'"></cm-title-nav>
      <div class="clearfix">
        <div class="left fl clearfix">
          <cm-thumbnail v-if="totalList.craftsmans[0]" :width="230" :height="135" :isTitle="true" :title="totalList.craftsmans[0].bodyTitle" class="fl" :src="totalList.craftsmans[0].thumbnailUrl"></cm-thumbnail>
          <cm-short-content class="fr list" v-if="totalList.craftsmans[1]" :msg="totalList.craftsmans[1]"></cm-short-content>
        </div>
        <div class="fr">
          <cm-news-list :newsList="workerList" :hasHotPoint="true" :delNum="1" class="font-color"></cm-news-list>
        </div>
      </div>
    </div>
    <!-- 艺迷社区 -->
    <div class="art-fan">
      <cm-title-nav oneTitle="艺迷社区" :secondTitle="arrTitleArr.twoTitleVOs.length > 3 ? [arrTitleArr.twoTitleVOs[0],arrTitleArr.twoTitleVOs[1],arrTitleArr.twoTitleVOs[2]] : arrTitleArr.twoTitleVOs"
        :showType="arrTitleArr.showType" :treeType="'arrTitleArr'"></cm-title-nav>
      <div class="flex-box">
          <cm-thumbnail v-for="(item , tag) in arrtListLeft" :key="tag" :width="230" :height="135" :isTitle="true" class="fl left" :title="item.bodyTitle" :src="item.thumbnailUrl"></cm-thumbnail>
      </div>
      <div class="flex-direction">
        <div v-if="arrtListRight && arrtListRight.length" class="cm-news-list hand-point clearfix" v-for="(val, key) in arrtListRight"
          :key="key" @click="toDetail(val)" style="width:490px;margin-right:25px;">
          <i class="fl"></i>
          <h3 class="fl font-color">{{val.bodyTitle}}</h3>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <div class="img-adv clearfix">
      <div class="fl hand-point" style="width:490px;height:100px;">
        <a :href="totalList.titleLinkMap[2][0].url">
          <img :src="totalList.titleLinkMap[2][0].name" alt="图片加载失败" style="width:490px;height:100px;">
        </a>
        <i>广告</i>
      </div>
      <div class="fr hand-point" style="width:490px;height:100px;">
        <a :href="totalList.titleLinkMap[2][1].url">
          <img :src="totalList.titleLinkMap[2][1].name" alt="图片加载失败" style="width:490px;height:100px;">
        </a>
        <i>广告</i>
      </div>
    </div>
    <!-- 美食天下 -->
    <div class="food-world">
      <cm-title-nav oneTitle="美食天下" :secondTitle="foodTitleArr.twoTitleVOs.length > 3 ? [foodTitleArr.twoTitleVOs[0],foodTitleArr.twoTitleVOs[1],foodTitleArr.twoTitleVOs[2]] : foodTitleArr.twoTitleVOs"
        :showType="foodTitleArr.showType" :treeType="'foodTitleArr'"></cm-title-nav>
      <div class="clearfix">
        <cm-thumbnail :width="480" :height="270" :isTitle="true" class="fl" :title="totalList.gourmetWorlds[0].bodyTitle" :src="totalList.gourmetWorlds[0].thumbnailUrl"></cm-thumbnail>
        <div class="fr right">
          <cm-thumbnail v-for="(item , k) in foodListLeft" :key="k" :width="235" :height="127" :isTitle="true" class="fl right-item" :title="item.bodyTitle"
            :src="item.thumbnailUrl"></cm-thumbnail>
        </div>
      </div>
    </div>
    <!-- 非遗中国 -->
    <div class="heritage">
      <cm-title-nav oneTitle="非遗中国" :secondTitle="chinaTitleArr.twoTitleVOs.length > 3 ? [chinaTitleArr.twoTitleVOs[0],chinaTitleArr.twoTitleVOs[1],chinaTitleArr.twoTitleVOs[2]] : chinaTitleArr.twoTitleVOs"
        :showType="chinaTitleArr.showType" :treeType="'chinaTitleArr'"></cm-title-nav>
      <div class="flex-box">
        <cm-thumbnail v-for="(item , k) in chinaListOne" :key="k" :width="230" :height="135" :isTitle="true" :title="item.bodyTitle" :src="item.thumbnailUrl"></cm-thumbnail>
      </div>
      <div class="flex-direction" style="height:106px;">
        <div v-if="chinaListTwo && chinaListTwo.length" class="cm-news-list hand-point clearfix" v-for="(val, key) in chinaListTwo"
          :key="key" @click="toDetail(val)" :style="{'margin-right':key>chinaListTwo.length-5?0:'26px'}">
          <i class="fl"></i>
          <h3 class="fl font-color">{{val.bodyTitle}}</h3>
        </div>
      </div>
    </div>
    <!-- 非遗培研 -->
    <div class="research clearfix">
      <div class="fl list">
        <cm-title-nav oneTitle="非遗培研" :secondTitle="studyTitleArr.twoTitleVOs.length > 3 ? [studyTitleArr.twoTitleVOs[0],studyTitleArr.twoTitleVOs[1],studyTitleArr.twoTitleVOs[2]] : studyTitleArr.twoTitleVOs"
        :showType="studyTitleArr.showType" :treeType="'studyTitleArr'"></cm-title-nav>
        <div>
          <div class="clearfix">
            <cm-thumbnail class="fl" :width="230" :height="135" :isTitle="true" :title="totalList.studyMatchs[0].bodyTitle" :src="totalList.studyMatchs[0].thumbnailUrl"></cm-thumbnail>
            <!-- <cm-short-content class="fr content"></cm-short-content> -->
            <cm-short-content class="fr content" v-if="totalList.studyMatchs[1]" :msg="totalList.studyMatchs[1]"></cm-short-content>
          </div>
          <div class="flex-direction" style="width:490px;height:110px;">
            <div v-if="studyList && studyList.length" class="cm-news-list hand-point clearfix" v-for="(val, key) in studyList"
              :key="key" @click="toDetail(val)">
              <i class="fl"></i>
              <h3 class="fl font-color">{{val.bodyTitle}}</h3>
            </div>
            <!-- <cm-news-list :newsList="studyList" :hasHotPoint="true" :delNum="2"></cm-news-list> -->
          </div>
        </div>
      </div>
      <div class="fr">
        <cm-swiper class="swiper" :baseData="bannerAdv" :height="256" :width="488" style="margin-top:30px;"></cm-swiper>
      </div>
    </div>

  </div>
</template>

<script>
  import Lib from "@/common/lib/lib.js";
  import CmSwiper from "@/components/cm-swiper";
  import CmTitleNav from "@/components/cm-title-nav";
  import CmThumbnail from "@/components/cm-thumbnail";
  import CmNewsList from "@/components/cm-news-list";
  import CmShortContent from "@/components/cm-short-content";

  export default {
    name: "Index",
    data() {
      return {
        bannerAmry: [], //文旅轮播
        bannerAdv: [], //广告轮播
        //res.data
        totalList: "",
        bodyList: {
          pageNo: 1,
          pageSize: 1,
          twoId: 1,
          oneId: 1
        },
        swiperLineNewTitle: [],
        cultureList: [], //文旅
        specialListLeft: [], //特别左侧
        specialListRight: [], //特别右侧
        workerList: [], //匠人
        arrtListLeft: [], //艺迷左侧
        arrtListRight: [], //艺迷右侧
        foodListLeft: [], //美食左侧
        foodListRight: [], //美食右侧
        chinaListOne: [], //非遗中国1
        chinaListTwo: [], //非遗中国2
        chinaListTree: [], //非遗中国3
        chinaListFour: [], //非遗中国4
        studyList: [], //非遗研培左侧

        indexTitleArr: [], //首页标题
        cultureTitleArr: [], //文旅标题
        workerTitleArr: [], //匠人匠心标题
        arrTitleArr: [], //艺迷标题
        foodTitleArr: [], //美食标题
        chinaTitleArr: [], //非遗中国标题
        studyTitleArr: [], //非遗研培标题
        specialTitleArr: [] //特别策划标题
      };
    },
    components: {
      CmSwiper,
      CmTitleNav,
      CmThumbnail,
      CmNewsList,
      CmShortContent
    },
    created() {
      this.$get("/index")
        .then(res => {
          console.log(res);
          this.totalList = res.data;
          let bannerArr = this.totalList.titleLinkMap[4];
          //处理轮播数据
          this.bannerAmry = this.changeArr(0, 5, 10, bannerArr);
          this.bannerAdv = this.changeArr(0, 10, 15, bannerArr);
          //根据类别处理数组
          this.changeListByType();
          //处理一二级标题
          this.chooseTitleNameFn();
        })
        .catch(err => {
          console.log(err);
        });
    },
    methods: {
      //跳转文旅资讯
      toCulureFn: function () {
        this.$router.push({
          path: "/CultureNewsIndex",
          query: {}
        });
      },
      //处理一二级标题
      chooseTitleNameFn: function () {
        var titleOv = this.totalList.titleVOs;
        let _this = this;
        titleOv.forEach(function (item, index) {
          switch (item.oneTitleName) {
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
              console.log();
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
        });
      },
      //根据类别处理数组
      changeListByType: function () {
        //文旅
        this.cultureList = this.changeArr(2,0,9,this.totalList.travelConsultings);
        //特别策划
        this.specialListLeft = this.changeArr(2,0,4,this.totalList.specialPlannings);
        this.specialListRight = this.changeArr(2,4,8,this.totalList.specialPlannings);
        //匠人匠心
        this.workerList = this.changeArr(2, 0, 4, this.totalList.craftsmans);
        //艺迷社区
        this.arrtListLeft = this.changeArr(0,0,4,this.totalList.artFanCommunitys);
        this.arrtListRight = this.changeArr(4,0,6,this.totalList.artFanCommunitys);
        //美食天下
        this.foodListLeft = this.changeArr(1,0,4,this.totalList.gourmetWorlds);
        //非遗中国
        this.chinaListOne = this.changeArr(0,0,4,this.totalList.inheritanceChinas);
        console.log(this.chinaListOne)
        this.chinaListTwo = this.changeArr(4,0,12,this.totalList.inheritanceChinas);
        //研培
        this.studyList = this.changeArr(2, 0, 3, this.totalList.studyMatchs);
        // console.log(this.cultureLeftRight)
      },
      //根据格式处理数组方法
      changeArr: function (del, from, to, newArr) {
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
      toUrlFn: function (url) {
        window.open(url);
      },
      //跳文章详情
      toDetail: function (obj) {
        this.$router.push({
          query: {
            oneTitleId: obj.oneTitleId,
            twoTitleId: obj.twoTitleId,
            id: obj.id
          },
          params: {
            id: obj.id
          },
          name: 'Details',
        });
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .indexPage {
    position: relative;
    margin-top: 60px;
    .top-new-line {
      width: 100%;
      height: 70px;
      margin: 20px auto;
      background: #f2f6f8;
      padding-top: 30px;
      text-align: center;
      color: #0b3c6c;
      h1 {
        line-height: 30px;
        font-size: 30px;
        width: 600px;
        margin: 0 auto;
        @include nowrap-ellipsis;
      }
      p {
        line-height: 14px;
        font-size: 14px;
        margin-top: 10px;
        width: 380px;
        @include nowrap-ellipsis;
      }
      .top-new-line-left {
        margin-left: 100px;
      }
      .top-new-line-right {
        margin-right: 100px;
      }
    }
    .flex-box {
      @include display-flex;
      @include justify-content-space;
      @include flex-wrap-wrap;
    }
    .flex-direction{
      height :100px;
      width : 230px;
      @include display-flex;
      // @include justify-content-space;
      @include flex-wrap-wrap;
      @include flex-direction;
    }
    .swiper-line {
      margin: 42px 0 49px 0;
      .swiper {
        width: 488px;
        margin-right: 20px;
      }
      >div {
        width: 492px;
        >div {
          >div {
            width: 230px;
          }
          .left {
            margin-right: 30px;
          }
        }
      }
    }
    .specialPlan {
      >div {
        >div {
          width: 488px;
          ul {
            margin-left: 30px;
            width: 225px;
          }
        }
      }
    }
    .craftsman {
      margin: 42px 0 49px 0;
      >div {
        .left {
          width: 488px;
          .list {
            width: 232px;
          }
        }
        >div {
          width: 490px;
        }
      }
    }
    .art-fan {
      .one-row {
        width: 50%;
        .video-list {
          .left {
            margin-right: 25px;
          }
        }
      }
    }
    .img-adv {
      margin: 53px 0 60px 0;
      >div {
        position: relative;
        img {
          width: 490px;
          height: 100px;
          border: 1px solid #000;
          display : block;
        }
        i {
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
    .food-world {
      .right {
        width: 516px;
        .right-item {
          margin: 0 0 15px 16px;
        }
      }
    }
    .heritage {
      margin: 60px 0 55px 0;
      .list {
        >div {
          width: 230px;
          margin-right: 26px;
        }
        .last {
          margin-right: 0;
        }
      }
      .cm-news-list{
        width : 230px;
        line-height : 34px;
        height : 34px;
      }
    }
    .research {
      .list {
        width: 490px;
        div {
          .content {
            width: 237px;
          }
        }
      }
      .swiper {
        width: 490px;
        height: 264px;
      }
      .cm-news-list{
        width : 490px;
        height : 36px;
        line-height :36px;
        font-size :16px;
        
      }
    }
    .font-color{
      color : #4c6f95;
    }
    .cm-news-list {
      width: 100%;
      line-height: 36px;
      font-size: 14px;

      i {
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background: $font-hot;
        margin: 15px 8px 0 0; 
      }
      h3 {
        vertical-align: top;
        max-width: 80%;
        @include nowrap-ellipsis;
      }
    }
  }

</style>
