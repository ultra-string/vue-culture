<template>
  <div id="app">
    <st-top-nav></st-top-nav>
    <div class="root-view">
      <st-top-logo></st-top-logo>
      <cm-top-nav
      :options="options"
      ></cm-top-nav>
      <router-view></router-view>
    </div>
    <st-foot-qrcode></st-foot-qrcode>
    <st-foot-nav></st-foot-nav>
    <st-right-adv></st-right-adv>
  </div>
</template>

<script>
import StTopNav from '@/components/sections/st-top-nav';
import StTopLogo from '@/components/sections/st-top-logo';
import CmTopNav from '@/components/cm-top-nav';
import StFootQrcode from '@/components/sections/st-foot-qrcode';
import StFootNav from '@/components/sections/st-foot-nav';
import StRightAdv from '@/components/sections/st-right-adv';

import Lib from '@/common/lib/lib.js'

export default {
  name: 'App',
  data() {
    return {
      options: [{
          value: '选项1',
          label: '新闻'
        }, {
          value: '选项2',
          label: '娱乐'
        }, {
          value: '选项3',
          label: 'happy'
        }],
    }
  },
  components: {
    StTopNav,
    StTopLogo,
    CmTopNav,
    StFootNav,
    StFootQrcode,
    StRightAdv,
  },
  created() {
    let aaa = Lib.changeCase('aaaaa',1);
    console.log(aaa)
    let page = 10;
    this.$get(`/body/${page}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
    this.$post('/body/page/oneId?pageNo=1&pageSize=2&twoId=1&oneId=10')
    .then(res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err);
    })
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
