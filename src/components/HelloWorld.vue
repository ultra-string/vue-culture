<template>
  <div class="demo">
    <div class="nav">我只是个假demo</div>
    <aside>我是一个骄傲的aside</aside>
    <div class="btn">我是桂胖子，点我点我</div>
    <div>sessionID: {{sessionId}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'sessionId'
    ])
  },
  created() {
    this.$post('/finsuitPhone/deal', {"head":{"TYPE":"GET_INDEX","SESSION_ID":"","TOKEN":"","DEVICE_ID":""},"param":{}})
      .then(res => {
        console.log(res)
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin border5px {
    -moz-border-radius: 0.5rem;
    -webkit-border-radius: 0.5rem;
    border-radius: 0.5rem;
}
@mixin buttonType (
    $color: #fff, 
    $height: 1rem, 
    $background: skyblue
) {
    width: 50%;
    height: $height;
    line-height: $height;
    text-align: center;
    background: $background;
    color: $color;
    margin: 0.5rem auto;
}
$defaultColor: rgb(202, 202, 165) !default;
aside{
    background: blue;
    color: #fff;
}
.demo{
  .nav{
    width:50%;
    background: $defaultColor;
    margin: 0.5rem auto;
    text-align: center;
    line-height:1rem;
    height: 1rem;
    @include border5px;
  }
  .btn{
    @include buttonType();
    @include border5px;
  }
}
</style>
