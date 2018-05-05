<template>
  <div class="cm-part-nav">
      <ul>
          <li class="marginBot" v-for="(val,key) in navTree" :key="key" :class="key == selectedKey ? 'active' : '' " @click.stop="chooseNav(key)">{{val.name}}</li>
      </ul>
  </div>

</template>

<script>

export default {
  name: 'CmPartNav',
  props: {
      
  },
  data() {
      return {
          selectedKey: 0,
          navTree: [{
            name: '文旅资讯',
            route: '/',
            url: '',
            nowPage: false,
            isOuter: false
        },{
            name: '要闻',
            route: '/cultureNews',
            url: '',
            nowPage: true,
            isOuter: false
        },{
            name: '展讯',
            route: '/cultureNews',
            url: '',
            nowPage: true,
            isOuter: false
        },{
            name: '政治法规',
            route: '/cultureNews',
            url: '',
            nowPage: true,
            isOuter: false
        }]
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
.cm-part-nav{
    position: relative;
    li {
        width: 220px;
        background: rgb(242,242,242);
        line-height: 48px;
        font-size: 18px;
        text-align: center;
        color: #000;
    }
    .marginBot{
        margin-bottom:1px;
    }
    .active{
        font-size: 22px;
        background: $font-hot;
        color: #fff;
    }
}
</style>
