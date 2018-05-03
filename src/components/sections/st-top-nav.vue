<template>
  <div class="top-nav">
    {{msg}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TopNav',
  data () {
    return {
      msg: '我是吸顶条'
    }
  },
  computed: {
    ...mapGetters([
      'sessionId'
    ])
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top-nav{
  background: rgb(252,252,252);
  width:100%;
  line-height:40px;
  border-top: 2px solid red;
  border-bottom: 2px solid rgb(238,238,240);
}
</style>
