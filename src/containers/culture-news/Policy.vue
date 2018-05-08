<template>
  <div class="">
      <cm-news-list
      :hasDashBorder="true"
      :newsList="newsList"
      ></cm-news-list>
  </div>
</template>

<script>
import CmNewsList from '@/components/cm-news-list';

export default {
  name: 'Policy',
  data () {
    return {
      newsList: [{
        title: '我是政策法规的标题啊！我是政策法规的标题啊！我是政策法规的标题啊！我是政策法规的标题啊！',
        date: '2018-7-20'
      },{
        title: '我是政策法规的标题啊！',
        date: '2018-7-20'
      },{
        title: '我是政策法规的标题啊！',
        date: '2018-7-20'
      },{
        title: '我是政策法规的标题啊！',
        date: '2018-7-20'
      },{
        title: '我是政策法规的标题啊！',
        date: '2018-7-20'
      },{
        title: '我是政策法规的标题啊！',
        date: '2018-7-20'
      },{
        title: '我是政策法规的标题啊！',
        date: '2018-7-20'
      },{
        title: '我是政策法规的标题啊！',
        date: '2018-7-20'
      }]
    }
  },
  components: {
    CmNewsList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
