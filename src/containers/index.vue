<template>
  <div class="indexPage">
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
        :secondTitle="swiperLineNewTitle"
        ></cm-title-nav>
        <div class="clearfix">
          <div class="fl left">
            <cm-thumbnail
            :width="230"
            :height="135"
            title="swiper标题"
            :isTitle="true"
            ></cm-thumbnail>
            <ul>
              <li>
                <cm-news-list
                :newsList="newsList"
                :hasHotPoint="true"
                ></cm-news-list>
              </li>
            </ul>
          </div>
          <div class="fl">
            <cm-thumbnail
            :width="230"
            :height="135"
            title="swiper标题"
            :isTitle="true"
            ></cm-thumbnail>
            <ul>
              <li>
                <cm-news-list
                :newsList="newsList"
                :hasHotPoint="true"
                ></cm-news-list>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 特别策划 -->
    <div class="specialPlan">
      <cm-title-nav
      oneTitle="特别策划"
      ></cm-title-nav>
      <div class="clearfix">
        <div class="fl clearfix">
          <cm-thumbnail
            class="fl"
            :width="230"
            :height="135"
            :title="totalList.specialPlannings[0].bodyTitle"
            :isTitle="true"
            :src="totalList.specialPlannings[0].imgUrl"
            ></cm-thumbnail>
            <ul class="fl">
              <li>
                <cm-news-list
                :newsList="totalList.specialPlannings"
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
            :src="totalList.specialPlannings[1].imgUrl"
            ></cm-thumbnail>
            <ul class="fl">
              <li>
                <cm-news-list
                :newsList="specialPlanNewsList"
                :hasHotPoint="true"
                ></cm-news-list>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <!-- 匠人匠心 -->
    <div class="craftsman">
      <cm-title-nav
      oneTitle="匠人匠心"
      :secondTitle="craftsmanTitle"
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
          :newsList="totalList.craftsmans"
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
          :newsList="newsList"
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
          :newsList="newsList"
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
              :newsList="newsList"
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
              :newsList="newsList"
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
              :newsList="newsList"
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
              :newsList="newsList"
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
            :newsList="newsList"
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
          IMG_URL: require('@/common/images/index/modelbg.png'),
          link: 'https://www.baidu.com'
        },
        {
          IMG_URL: require('@/common/images/index/newUserAlert.png'),
          link: 'https://www.taobao.com'
        },
        {
          IMG_URL: require('@/common/images/index/oldAlert.png'),
          link: 'https://www.souhu.com'
        }
      ],
      newsList: [
        {
          title: '我是政策法规的标题啊！我是政策法规的标题啊！我是政策法规的标题啊！我是政策法规的标题啊！',
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
      ]
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
      //特别策划
      this.totalList.specialPlannings[0] = {};
      this.totalList.specialPlannings[0].bodyTitle = '特别策划';
      this.totalList.specialPlannings[0].imgUrl = require('@/common/images/demo.png');
      this.totalList.specialPlannings[1] = {};
      this.totalList.specialPlannings[1].bodyTitle = '特别策划';
      this.totalList.specialPlannings[1].imgUrl = require('@/common/images/demo.png');
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.indexPage{
  position: relative;
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
