<template>
  <div @click="toDetail" class="cm-thumbnail hand-point" :style="{width: width+'px',height: height+'px' }">
      <img :style="{width: width+'px',height: height+'px' }" :src="src" alt="图片加载失败">
      <div v-if="isTitle" :style="{width: width+'px', 'line-height': (height*0.3>50?50:height*0.3) + 'px'}" class="box-lvha">&nbsp;&nbsp;{{title}}&nbsp;&nbsp;</div>
      <img v-if="isVideo" class="video-btn" :src="src" alt="图片加载失败" @click.stop="watchVideo">
  </div>
</template>

<script>

export default {
  name: 'CmThumbnail',
  props: {
      width: {
        type: Number,
        default: 170
      },
      height: {
        type: Number,
        default: 100
      },
      title: {
        type: String,
        default: '我是这个视频的标题'
      },
      src: {
        type: String,
        // default: require('@/common/images/demo.png'),
        default: ''
      },
      videoBtn: {
        type: String,
        default: require('@/common/images/demo.png')
      },
      path: {
        type: String,
        default: '/404'
      },
      isTitle: {
        type: Boolean,
        default: false,
      },
      isVideo: {
        type: Boolean,
        default: false,
      },
      msg : {
        type : Object,
        default : function(){
          return {}
        }
      },
      isFn : {
        type : Boolean,
        default : false
      }
  },
  data () {
    return {

    }
  },
  methods: {
    watchVideo: function() {
      this.$router.push(path)
    },
    toOnePath : function(obj){
      this.$router.push({
        path : '/CultureNewsIndex',
        query : {
          oneTitleId : obj.id,
          twoTitleId : '',
          showType : obj.showType,
          // showType : 1,
        }
      })
    },
    //跳转
    toDetail : function(){
      let obj = this.msg;
      if(this.isFn){
        let item = obj;
        console.log(this.msg)
        if(item.isLink == 0){
          //二级界面
          this.toOnePath(item);
        }else if(item.isLink == 1){
          if(!item.url)return;
          window.open(item.url);
        }else if(item.isLink == 2){
          this.$router.push({
            path : '/'
          });
          return;
        }
      }else{
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-thumbnail{
  position: relative;
  .video-btn{
    width: 30%;
    height: 30%;
    border-radius: 50%;
    position:absolute;
    top: 50%;
    left: 50%;
    transform : translate(-50%,-70%);
  }
  div {
    background: rgba(100,131,161,0.9);
    height: 30%;
    max-height : 50px;
    vertical-align: center;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    @include nowrap-ellipsis;
  }
  .box-lvha:hover{
    background : #6685a3;
  }
}
</style>
