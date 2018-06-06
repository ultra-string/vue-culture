<template>
  <div @click="toDetail" class="cm-thumbnail hand-point" :style="{width: width+'px',height: height+'px' }">
      <img :style="{width: width+'px',height: height+'px' }" :src="src" alt="图片加载失败">
      <div v-if="isTitle" :style="{width: width+'px', 'line-height': height*0.3 + 'px'}">&nbsp;&nbsp;{{title}}&nbsp;&nbsp;</div>
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
        default: require('@/common/images/demo.png')
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
    vertical-align: center;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    @include nowrap-ellipsis;
  }
}
</style>
