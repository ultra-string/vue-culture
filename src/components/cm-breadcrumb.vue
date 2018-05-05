<template>
  <div class="cm-breadcrumb clearfix">
      <div class="left-breadcrumb clearfix fl">
          <div class="fl" :class="!key == navTree.length-1 ? 'hot' : '' " v-for="(val, key) in navTree" :key="key">{{val.name}}<span v-if="!key == navTree.length-1">></span></div>
      </div>
      <div class="right-breadcrumb clearfix fr">
          <div class="fl">您当前的位置：</div>
          <div class="fl" v-for="(val, key) in navTree" :key="key">{{val.name}}<span v-if="!key == navTree.length-1">></span></div>
      </div>
  </div>

</template>

<script>

export default {
  name: 'CmBreadcrumb',
  props: {
      navTree: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-breadcrumb{
    border-bottom:2px solid $color-breadcrumb;
    .hot{
        color: $font-hot;
    }
    .left-breadcrumb{
        margin-bottom: -2px;
        padding: 0 20px 0 6px;
        border-bottom: 2px solid $font-hot;
    }
    .right-breadcrumb{
        font-size: 13px;
    }
}
</style>
