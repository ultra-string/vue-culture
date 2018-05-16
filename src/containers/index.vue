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
        oneTitle="文旅资讯"
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
            title="特别策划标题"
            :isTitle="true"
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
        <div class="fr clearfix">
          <cm-thumbnail
            class="fl"
            :width="230"
            :height="135"
            title="特别策划标题"
            :isTitle="true"
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
    </div>

  </div>
</template>

<script>
import Lib from '@/common/lib/lib.js'
import CmSwiper from '@/components/cm-swiper'
import CmTitleNav from '@/components/cm-title-nav'
import CmThumbnail from '@/components/cm-thumbnail'
import CmNewsList from '@/components/cm-news-list'

export default {
  name: 'Index',
  data () {
    return {
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
      newsList: [{
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
      }],
      swiperLineNewTitle: [
        {title: '要闻', link: '/index'},
        {title: '展讯', link: '/index'},
        {title: '政治法规', link: '/index'},
      ],
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
      ]
    }
  },
  components: {
    CmSwiper,
    CmTitleNav,
    CmThumbnail,
    CmNewsList
  },
  created() {

    this.$post(`/body/page/oneId?${Lib.json2url(this.bodyList)}`)
    .then(res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err);
    })
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
  }
}
</style>
