<template>
  <div class="exhibition-news">
      <st-video-item class="videoItem"></st-video-item>
      <div>
        <template>
          <!-- <cm-news-list
          :newsList="newsList"
          ></cm-news-list> -->
          <div>我是一个文章的米搜狐是信息啊，就是不知道咋写样式啊，写不会啊写不会啊，就是写不会啊，你说咋办就咋办，最近心情不好，讨厌拖拉着那个，等我弄到机会折腾死</div>
        </template>
      </div>
  </div>
</template>

<script>
import StVideoItem from '@/components/sections/st-video-item';
import CmNewsList from '@/components/cm-news-list';

export default {
  name: 'ExhibitionNews',
  data () {
    return {
      newsList: [
        {}
      ]
    }
  },
  components: {
    StVideoItem,
    CmNewsList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.exhibition-news{
  margin-left: 20px;
  @include display-flex;
  @include justify-content-space;
  // div{
  //   background: pink;
  //   width: 550px; 
  // }
}
</style>
