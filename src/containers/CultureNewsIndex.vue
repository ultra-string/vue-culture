<template>
  <div class="culture-news-view">
    <cm-bradcrumb
    style="margin:18px 0;lineHeight: 45px;fontSize:19px"
    :navTree="navTree"
    ></cm-bradcrumb>
    <div class="clearfix">
      <div class="fl">
        <cm-part-nav
        :navTree="ClutureNewsTree"
        ></cm-part-nav>
      </div>
      <div class="fl culture-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import CmBradcrumb from '@/components/cm-breadcrumb';
import CmPartNav from '@/components/cm-part-nav';

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
    CmPartNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.culture-news-view{
  position: relative;
  .culture-view {
    width: 750px;
    margin-left: 30px;
  }
}
</style>