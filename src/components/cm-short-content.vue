<template>
    <div class="cm-short-content hand-point" @click="toDetail">
        <h1>{{msg.bodyTitle}}</h1>
        <p>{{msg.summary}}</p>
    </div>
</template>

<script>

export default {
  name: 'CmShare',
  data() {
    return {

    }
  },
  props : {
      msg : {
          type : Object,
          default : function(){
              return {
                  bodyTitle : '暂无数据',
                  summary : ''
              }
          }
      }
  },
  methods : {
    //跳转
    toDetail : function(){
      let obj = this.msg;
      this.$router.push({
          query : {
              oneTitleId : obj.oneTitleId,
              twoTitleId : obj.twoTitleId,
              id : obj.id
          },
          params : {
              id : obj.id
          },
          name : 'Details',
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.cm-short-content{
    width: 100%;
    h1{
        line-height : 30px;
        font-size : 16px;
        margin-bottom : 10px;
        height : 30px;
        @include nowrap-ellipsis;
        width : 100%;
        text-align : center;
        color : #0c3c6c;
    }
    p{
        height : 97px;
        font-size : 12px;
        line-height : 24px;
        @include overflow-hidden-wrap(4);
        text-indent:2em;
    }
}
.cm-short-content:hover{
      color : #b22f24;
}
.cm-short-content:hover h1{
      color : #b22f24;
}
</style>
