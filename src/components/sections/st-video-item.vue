<template>
  <div class="st-video-list clearfix">
    <cm-thumbnail
    :width="170"
    :height="100"
    class="fl video-item"
    ></cm-thumbnail>
    <div class="fl">
        <div>{{desc}}</div>
        <span></span>
    </div>
  </div>
</template>

<script>
import CmThumbnail from '@/components/cm-thumbnail';

export default {
  name: 'StVideoList',
  props: {
      title: {
          type: String,
          default: '我是文章标题啊，我是文章的标题'
      },
      desc: {
          type: String,
          default: '我是文章的描述啊我是文章的描述我是文章的描述啊'
      },
      date: {
          type: String,
          defult: '2018-07-21'
      },
      path: {
          type: String,
          default: '/ExhibitionNews/List'
      }
  },
  data () {
    return {

    }
  },
  components: {
    CmThumbnail
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.st-video-list{
    .video-item{
        margin: 0 24px 64px 0; 
    }
}
</style>
