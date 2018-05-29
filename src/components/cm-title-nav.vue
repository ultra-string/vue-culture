<template>
  <div class="cm-list-nav">
      <i></i>
      <h3>{{oneTitle}}</h3>
      <span></span>
      <div class="clearfix">
        <div class="fl" v-for="(value, key) in secondTitle" :key="key">
          <h4>{{value.twoTitleName}}</h4>
          <span v-if="key != secondTitle.length - 1"></span>
        </div>
        <div class="fr more" @click="toCulureFn">更多>></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "cm-select",
  props: {
    oneTitle: {
      type: String,
      default: '首标题'
    },
    secondTitle: {
      type: Array,
      default: function() {
        return []
      }
    },
    showType : {
      type : Number,
      default : 0
    },
    treeType : {
      type : String,
      default : 'cultureTitleArr'
    }
  },
  data() {
    return {
    };
  },
  methods: {
    //跳转文旅资讯
    toCulureFn : function(cuId){
      this.$router.push({
        path : '/CultureNewsIndex',
        query : {
          oneTitleId : this.secondTitle[0].oneTitleId,
          showType : this.showType,
          treeType : this.treeType
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-list-nav {
  height: 40px;
  line-height: 40px;
  width: 100%;
  @include display-flex;
  margin-bottom: 21px;
  i{
    display: block;
    width: 6px;
    height: 6px;
    margin: 10px 2px 0 0;
    border-radius: 100%;
    background: $font-hot;
  }
  h3{
    color: $font-hot;
    border-bottom: 3px solid $font-hot;
    height: 24px;
    line-height: 24px;
    padding-bottom: 2px;
    position: relative;
    z-index: 10;
  }
  >span{
    display: block;
    padding-top: 1px;
    width: 2px;
    height: 10px;
    // border-top: 2px solid $color-border-input;
    transform:rotate(-45deg);
    -ms-transform:rotate(-45deg); 	/* IE 9 */
    -moz-transform:rotate(-45deg); 	/* Firefox */
    -webkit-transform:rotate(-45deg); /* Safari 和 Chrome */
    -o-transform:rotate(-45deg); 	/* Opera */
    // background: blue;
    // margin-left: -5px;
    margin-top: 25px;
    background:$color-border-input;
    border-radius: 2px;
  } 
  >div {
    width: 100%;
    height: 29px;
    line-height: 29px;
    border-bottom: 2px solid $color-border-input;
    border-radius: 2px;
    flex-grow:1;
    margin-top: 4px;
    padding-left: 30px;
    >div {
      margin-left:18px;
      h4{
        display: inline-block;
        margin-right:18px;
      }
      span{
        display: inline-block;
        background: $color-border-input;
        width: 2px;
        height: 10px;
      }
    }
    .more {
      background: $font-hot;
      color: #fff;
      width: 41px;
      line-height: 16px;
      font-size: 12px;
      margin-top: 6px;
      text-align: center;
      margin-left: 0;
    }
  }
}
</style>
