<template>
  <div class="cm-list-nav">
      <i></i>
      <h3>{{oneTitle}}</h3>
      <span></span>
      <div class="clearfix">
        <div class="fl hand-point" v-for="(value, key) in secondTitle" :key="key" v-if="secondTitle && secondTitle.length">
          <h4 @click="toCulureFn(value)">{{value.twoTitleName}}</h4>
          <span v-if="key != secondTitle.length - 1"></span>
        </div>
        <div class="hand-point fr more box-lvha" @click="toCulureFn('')">更多>></div>
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
    },
    specialPath : {
      type : String,
      default : ''
    },
    oneId : {
      type : String,
      default : '',
    }
  },
  data() {
    return {
    };
  },
  methods: {
    // //跳转文旅资讯
    toCulureFn : function(obj){
      // console.log(this.specialPath)
      // console.log(this.secondTitle[0].oneTitleId)
     if(this.specialPath){
        this.$router.push({
          path : this.specialPath
        });
        return;
      }
      if(!obj){
        let oneId = this.secondTitle.length ? this.secondTitle[0].oneTitleId : this.oneId;
        this.$router.push({
          path : '/CultureNewsIndex',
          query : {
            oneTitleId : oneId,
            showType : this.showType,
            treeType : this.treeType
          }
        })
        return;
      }
      console.log(obj)
      if(obj.twoTitleVOs){
        if(obj.oneTitleName == '首页'){
          return;
        }
        this.$router.push({
          path : '/CultureNewsIndex',
          query : {
            oneTitleId : obj.id,
            twoTitleId : '',
            showType : obj.showType,
          }
        })
      }else{
        this.$router.push({
          path : '/CultureNewsIndex',
          query : {
            oneTitleId : obj.oneTitleId,
            twoTitleId : obj.id,
            showType : obj.showType,
          }
        })
      }
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
  .box-lvha:hover{
    background : #9a190e;
  }
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
    width : 100px;
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
    width: calc(100% - 120px - 60px - 6px);
    height: 29px;
    line-height: 29px;
    border-bottom: 2px solid $color-border-input;
    border-radius: 2px;
    flex-grow:1;
    margin-top: 4px;
    padding-left: 20px;
    >div {
      margin-left:15px;
      h4{
        display: inline-block;
        margin-right:15px;
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
      width: 50px;
      line-height: 16px;
      font-size: 12px;
      margin-top: 6px;
      text-align: center;
      margin-left: 0;
    }
  }
}
</style>
