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
  </div>
</template>

<script>
import StTopNav from '@/components/sections/st-top-nav';
import StTopLogo from '@/components/sections/st-top-logo';
import CmTopNav from '@/components/cm-top-nav';

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
    CmTopNav
  },
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
