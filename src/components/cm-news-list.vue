<template>
  <div>
      <div class="cm-news-list" :class="hasDashBorder ? 'hasDashBorder' : ''" v-for="(val, key) in newsList" :key="key">
          <h3>{{val.title}}</h3>
          <div>{{val.date}}</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CmNewsList',
  props: {
      newsList: Array,
      /*
      *  文字下方是否有虚线
      */ 
      hasDashBorder: {
          type: Boolean,
          default: false
      }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hasDashBorder{
    border-bottom: 1px dashed $color-breadcrumb;
}
.cm-news-list{
    width: 100%;
    line-height: 36px;
    font-size: 14px;
    @include display-flex;
    @include justify-content-space;
    h3 {
        max-width: 80%;
        @include nowrap-ellipsis; 
    }
}
</style>
