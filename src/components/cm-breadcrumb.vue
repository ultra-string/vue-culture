<template>
  <div class="cm-breadcrumb clearfix">

    <div class="left-breadcrumb clearfix fl">
      <div class="fl hot">首页
        <span v-if="oneTitleName">></span>
      </div>
      <div class="fl hot" v-if="oneTitleName">{{oneTitleName}}
        <span v-if="twoTitleName">></span>
      </div>
      <div class="fl hot" v-if="twoTitleName">{{twoTitleName}}</div>
      <!-- <div class="fl" v-for="(val, k) in dataList" :key="k" :class="k != dataList.length-1 ? 'hot' : '' ">{{val}}
        <span v-if="!k == dataList.length-1">></span>
      </div> -->

    </div>
    <div class="right-breadcrumb clearfix fr">

      <div class="fl">您当前的位置：</div>
      <div class="fl">首页
        <span v-if="oneTitleName">></span>
      </div>
      <div class="fl" v-if="oneTitleName">{{oneTitleName}}
        <span v-if="twoTitleName">></span>
      </div>
      <div class="fl" v-if="twoTitleName">{{twoTitleName}}
        <span>></span>
      </div>
      <!-- <div class="fl" v-for="(val, k) in dataList" :key="k">{{val}}
        <span v-if="key != dataList.length-1">></span>
      </div> -->

    </div>

  </div>
</template>

<script>
export default {
  name: "CmBreadcrumb",
  data (){
    return {
      oneTitleName : '',
      twoTitleName : '',
    }
  },
  created() {
    // this.oneTitleName = this.oneTitle;
    // this.twoTitleName = this.twoTitle;
  },
  methods : {
    getTree : function(one,two){
      this.oneTitleName = one;
      this.twoTitleName = two;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-breadcrumb {
  border-bottom: 2px solid $color-breadcrumb;

  .hot {
    color: $font-hot;
  }

  .left-breadcrumb {
    margin-bottom: -2px;

    padding: 0 20px 0 6px;

    border-bottom: 2px solid $font-hot;
  }

  .right-breadcrumb {
    font-size: 13px;
  }
}
</style>
