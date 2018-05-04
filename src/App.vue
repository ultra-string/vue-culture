<template>
  <div id="app">
  	<top-nav></top-nav>
  	<div class="root-view">
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
import TopNav from '@/components/sections/st-top-nav';

export default {
  name: 'App',
  components: {
    TopNav
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.root-view{
	background: skyblue;
    width:1000px;
    margin:0 auto;
    min-width: 1000px; 
	width:expression(document.body.clientWidth < 1000? "1000px": "auto" ); 
}
</style>
