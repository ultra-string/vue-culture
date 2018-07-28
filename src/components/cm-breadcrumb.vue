<template>
  <div class="cm-breadcrumb clearfix">

    <div class="left-breadcrumb clearfix fl hand-point">
      <div class="fl hot" @click="toPath">首页
        <span v-if="oneTitleName">></span>
      </div>
      <div class="fl hot" v-if="oneTitleName" @click="toPath(oneTitleName)">{{oneTitleName.title}}
        <span v-if="twoTitleName">></span>
      </div>
      <div class="fl hot" v-if="twoTitleName" @click="toPath(twoTitleName)">{{twoTitleName.title}}
        <span v-if="threeTitleName">></span>
      </div>
      <div class="fl hot" v-if="threeTitleName" @click="toPath(threeTitleName)">{{threeTitleName.title}}</div>
      <!-- <div class="fl" v-for="(val, k) in dataList" :key="k" :class="k != dataList.length-1 ? 'hot' : '' ">{{val}}
        <span v-if="!k == dataList.length-1">></span>
      </div> -->

    </div>
    <div class="right-breadcrumb clearfix fr hand-point">

      <div class="fl">您当前的位置：</div>
      <div class="fl" @click="toPath">首页
        <span v-if="oneTitleName">></span>
      </div>
      <div class="fl" v-if="oneTitleName" @click="toPath(oneTitleName)">{{oneTitleName.title}}
        <span v-if="twoTitleName">></span>
      </div>
      <div class="fl" v-if="twoTitleName" @click="toPath(twoTitleName)">{{twoTitleName.title}}
        <span v-if="threeTitleName">></span>
      </div>
      <div class="fl" v-if="threeTitleName" @click="toPath(threeTitleName)">{{threeTitleName.title}}</div>
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
      threeTitleName : '',
    }
  },
  created() {
    // this.oneTitleName = this.oneTitle;
    // this.twoTitleName = this.twoTitle;
  },
  methods : {
    getTree : function(one,two,three){
      this.oneTitleName = one;
      this.twoTitleName = two;
      this.threeTitleName = three;
    },
    toPath(obj){
      if(!obj){
        this.$router.push({
          path : '/Index'
        })
      }else{
      console.log('===>>>>>',obj)
        let twoId = obj.twoId == -1 ? '' : obj.twoId;
        this.$router.push({
          path : '/CultureNewsIndex',
          query : {
            oneTitleId : obj.oneId,
            twoTitleId : twoId,
            showType : obj.type
          }
        })
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-breadcrumb {
  // border-bottom: 2px solid $color-breadcrumb;

  .hot {
    color: $font-hot;
  }

  .left-breadcrumb {
    margin-bottom: -2px;

    padding: 0 20px 0 0;

    // border-bottom: 2px solid $font-hot;
  }

  .right-breadcrumb {
    font-size: 13px;
  }
}
</style>
