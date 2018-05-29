<template>
  <div>
      <div class="cm-news-list clearfix" :class="hasDashBorder ? 'hasDashBorder' : ''" v-for="(val, key) in newsList" :key="key">
          <i v-if="hasHotPoint" class="fl"></i>
          <h3 class="fl">{{val.bodyTitle}}</h3>
          <div v-if="hasDate" class="fr">{{val.updateTime | getTimeYMDWord}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "CmNewsList",
  props: {
    newsList: {
      type: Array,
      default: function() {
        return [
        ];
      }
    },
    /*
      *  文字下方是否有虚线
      */

    hasDashBorder: {
      type: Boolean,
      default: false
    },
    /*
      *  文字左面是否有小红点
      */

    hasHotPoint: {
      type: Boolean,
      default: false
    },
    /*
      *  文字左面是否有显示时间
      */

    hasDate: {
      type: Boolean,
      default: false
    },
    //去除list的length（把显示图片的newsList排除）
    delNum : {
        type : Number,
        default : 2
    }
  },
  data() {
    return {
        dataList : [],
    };
  },
  created() {
    //处理list
    this.dataList = this.newsList;
    // console.log(this.dataList)
    // this.delNumFn();
  },
  methods : {
      //处理newsList
      delNumFn : function(){
          if(!this.dataList.length)return;
          this.dataList = this.dataList.splice(0 , this.delNum);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hasDashBorder {
  border-bottom: 1px dashed $color-breadcrumb;
}
.cm-news-list {
  width: 100%;
  line-height: 36px;
  font-size: 14px;
  // @include display-flex;
  // @include justify-content-space;
  i {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: $font-hot;
    margin: 15px 8px 0 0;
  }
  h3 {
    vertical-align: top;
    max-width: 80%;
    @include nowrap-ellipsis;
  }
}
</style>
