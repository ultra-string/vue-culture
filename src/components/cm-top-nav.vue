<template>
  <div class="cm-top-nav">
      <ul class="clearfix">
          <li class="fl" v-for="(val, key) in options" :key="key" :class="selectedKey == key ? 'action' : '' " @click.stop="chooseNav(key)">{{val.label}}</li>
      </ul>
      <img src="@/common/images/index/top-share.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'cmTopNav',
  props: {
      options: Array
  },
  data () {
    return {
        selectedKey: 0
    }
  },
  methods: {
      chooseNav: function(key) {
          this.selectedKey = key;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-top-nav{
    li {
        margin:0 30px 36px 0;

    }
    .action {
        color: $font-hot;
        border-bottom: 2px solid $font-hot;
    }
}
</style>
