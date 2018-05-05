<template>
  <div class="culture-news-page">
    <cm-bradcrumb
    style="margin:18px 0;lineHeight: 45px;fontSize:19px"
    :navTree="navTree"
    ></cm-bradcrumb>
    <div class="clearfix">
      <div class="fl">
        <cm-part-nav></cm-part-nav>
      </div>
      <div>

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
        route: '/',
        url: '',
        nowPage: false,
        isOuter: false
      },{
        name: '文旅资讯',
        route: '/cultureNews',
        url: '',
        nowPage: true,
        isOuter: false
      }]
    }
  },
  components: {
    CmBradcrumb,
    CmPartNav
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.indexPage{
  position: relative;
}
</style>