<template>
  <div id="app">
  	<st-top-nav></st-top-nav>
  	<div class="root-view">
      <st-top-logo></st-top-logo>
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
import StTopNav from '@/components/sections/st-top-nav';
import StTopLogo from '@/components/sections/st-top-logo';

export default {
  name: 'App',
  components: {
    StTopNav,
    StTopLogo
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
