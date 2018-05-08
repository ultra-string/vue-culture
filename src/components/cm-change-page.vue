<template>
  <div class="cm-change-page clearfix" :class="hasTopLine ? 'top-line' : '' ">
      <div class="clearfix fr">
        <div class="fl">
            <span>目前在第</span>
            <span class="hot">1</span>
            <span>页，共有</span>
            <span class="hot">10</span>
            <span>页，共有</span>
            <span class="hot">90</span>
            <span>条记录</span>
        </div>
        <div class="fl to-page">
            <span>跳转</span>
            <input type="text" v-bind="toPage">
            <i>上一页</i>
            <i class="middle">下一页</i>
            <i>最后一页</i>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CmChagePage',
  props: {
      hasTopLine: {
          type: Boolean,
          default: true
      },
      navTree: Array
  },
  data() {
      return {
          toPage: ''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-change-page{
    line-height: 59px;
    margin-bottom: 42px;
    .hot{
        color: $font-hot;
    }
    .to-page{
        margin-left: 45px;
        input{
            width: 32px;
            height: 11px;
            border: 1px solid rgb(78,78,78);
        }
        .middle {
            display: inline-block;
            margin: 0 19px;
        }
    }
}
.top-line{
    border-top: 2px solid $color-border-input;
}
</style>
