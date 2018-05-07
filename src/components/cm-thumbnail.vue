<template>
  <div class="cm-thumbnail" :style="{width: width+'px',height: height+'px' }">
      <img :style="{width: width+'px',height: height+'px' }" :src="src" alt="">
      <div :style="{width: width+'px', 'line-height': height*0.3 + 'px'}">&nbsp;&nbsp;{{title}}&nbsp;&nbsp;</div>
      <img class="video-btn" :src="src" alt="" @click.stop="watchVideo">
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
      }
  },
  data () {
    return {

    }
  },
  methods: {
    watchVideo: function() {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-thumbnail{
  border: 1px solid #000;
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
    background: rgb(0,0,0);
    height: 30%;
    vertical-align: center;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    @include nowrap-ellipsis;
  }
}
</style>
