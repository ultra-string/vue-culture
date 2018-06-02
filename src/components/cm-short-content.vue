<template>
    <div class="cm-short-content hand-point">
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
  }
}
</script>

<style lang="scss" scoped>
.cm-short-content{
    width: 100%;
    h1{
        line-height : 30px;
        font-size : 18px;
        margin-bottom : 10px;
        height : 30px;
        @include nowrap-ellipsis;
        width : 100%;
        text-align : center;
        color : #0c3c6c;
    }
    p{
        height : 97px;
        font-size : 14px;
        line-height : 24px;
        @include overflow-hidden-wrap(4);
    }
}
</style>
