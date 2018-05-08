<template>
  <div class="exhibition-news">
      <cm-thumbnail class="videoItem"></cm-thumbnail>
      <div class="content">
        <template>
          <cm-news-list
          class="news-list"
          :newsList="newsList"
          ></cm-news-list>
          <div class="news-desc">
            <span>讨厌拖拉着那个，等我弄到机会折腾死，大叔大婶大时代发生打发斯蒂芬阿斯蒂芬阿斯顿发斯蒂芬斯蒂芬撒旦法阿斯蒂芬讨厌拖拉着那个，等我弄到机会折腾死，大叔大婶大时代发生打发斯蒂芬阿斯蒂芬阿斯顿发斯蒂芬斯蒂芬撒旦法阿斯蒂芬讨厌拖拉着那个，等我弄到机会折腾死，大叔大婶大时代发生打发斯蒂芬阿斯蒂芬阿斯顿发斯蒂芬斯蒂芬撒旦法阿斯蒂芬</span>
            <span>我是末尾的标题</span></div>
        </template>
      </div>
  </div>
</template>

<script>
import CmThumbnail from '@/components/cm-thumbnail';
import CmNewsList from '@/components/cm-news-list';

export default {
  name: 'ExhibitionNews',
  data () {
    return {
      newsList: [
        {
          title: '我是政策法规的标题啊！我是政策法规的标题啊！我是政策法规的标题啊！我是政策法规的标题啊！',
          date: '2018-7-20'
        }
      ]
    }
  },
  components: {
    CmThumbnail,
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
  .content{
    width: 540px;
    // height: 111px;
    overflow: hidden;
    margin-bottom: 11px;
    .news-list{
      font-size: 17px;
      line-height: 17px;
    }
    .news-desc{
      background: skyblue;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp:3;
      -webkit-box-orient: vertical;
      display: inline-block;
      line-height: 26px;
      font-size: 14px;
      span{
        
        display: block;
        overflow:hidden;
      }
    }
  }
}
</style>
