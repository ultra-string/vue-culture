<template>
  <div class="culture-news-view">
    <cm-bradcrumb
    style="margin:18px 0;lineHeight: 45px;fontSize:19px"
    :navTree="navTree"
    ></cm-bradcrumb>
    <div class="clearfix">
      <div class="culture-nav fl">
        <cm-part-nav
        :navTree="ClutureNewsTree"
        ></cm-part-nav>
      </div>
      <div class="culture-view fl">
        <router-view></router-view>
      </div>
    </div>
    <cm-change-page></cm-change-page>
    <st-foot-nav></st-foot-nav>
  </div>
</template>

<script>
import CmBradcrumb from '@/components/cm-breadcrumb';
import CmPartNav from '@/components/cm-part-nav';
import CmChangePage from '@/components/cm-change-page';
//底部
import StFootNav from '@/components/sections/st-foot-nav.vue';

export default {
  name: 'CultureNews',
  data () {
    return {
      navTree: [{
        name: '首页',
            path: 'CultureNews',
            url: '',
            nowPage: false,
            isOuter: false
      },{
        name: '文旅资讯',
            path: 'CultureNews',
            url: '',
            nowPage: false,
            isOuter: false
      }],
      ClutureNewsTree: [{
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
        }]
    }
  },
  components: {
    CmBradcrumb,
    CmPartNav,
    StFootNav,
    CmChangePage
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