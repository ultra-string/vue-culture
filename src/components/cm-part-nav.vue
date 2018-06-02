<template>
  <div class="cm-part-nav">
      <ul>
        <li class="marginBot" :class="0 == selectedKey ? 'active' : '' " @click.stop="chooseNav(0 , navTree.id , '' , navTree.showType)">{{navTree.oneTitleName}}</li>
        <li class="marginBot" v-for="(val,key) in navTree.twoTitleVOs" :key="key" :class="key+1 == selectedKey ? 'active' : '' " @click.stop="chooseNav(key+1 , val.oneTitleId , val.id , val.showType)">{{val.twoTitleName}}</li>
      </ul>
  </div>

</template>

<script>

export default {
  name: 'CmPartNav',
  props: {
      navTree : {
          type : Object,
          default : function(){
              return {}
          }
      }
  },
  data() {
      return {
          selectedKey: 0,
      }
  },
  props : {
      selectedKeyProp : {
          type : Number,
          default : 0
      }
  },
  created(){
    //   console.log(this.navTree)
    this.selectedKey = this.selectedKeyProp;
  },
  methods: {
      chooseNav: function(key , oneId , twoId , showType) {
          //pageNo:第几页;pageSize:一页几条数据;twoId二级标题id;oneId一级标题id;showType格式
          let pageSize = 12;
          let pageNo = 1;
          if(!twoId){
              twoId = '';
          }
          this.$emit("getBodyTitlePartProps", pageNo , pageSize , oneId , twoId , showType);
          this.selectedKey = key;
        //   this.$router.push({name: this.navTree[key].path});
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
