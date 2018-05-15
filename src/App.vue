<template>
  <div id="app">
<!--   	<st-top-nav></st-top-nav>
  	<div class="root-view">
      <st-top-logo></st-top-logo>
      <cm-top-nav
      :options="options"
      ></cm-top-nav> -->
  		<router-view></router-view>
<!--   	</div>
    <st-foot-qrcode></st-foot-qrcode>
    <st-foot-nav></st-foot-nav>
    <st-right-adv></st-right-adv> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    // let aaa = Lib.changeCase('aaaaa',1);
    // console.log(aaa)
    // let page = 10;
    // this.$get(`/body/${page}`)
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
    // this.$post('/body/page/oneId?pageNo=1&pageSize=2&twoId=1&oneId=10')
    // .then(res => {
    //   console.log(res)
    // })
    // .catch( err => {
    //   console.log(err);
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
