<template>
  <div>
      <div class="cm-news-list clearfix" v-for="(val, key) in newsList" :key="key">
          <h3 class="fl">{{val.title}}</h3>
         <div class="fr">{{val.date}}</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CmNewsList',
  props: {
      newsList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-news-list{
    width: 100%;
    border-bottom: 1px dashed $color-breadcrumb;
    line-height: 36px;
    font-size: 14px;
}
</style>
