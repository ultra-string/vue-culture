<template>
  <div class="exhibition-news">
      <st-video-item></st-video-item>
  </div>
</template>

<script>
import StVideoItem from '@/components/sections/st-video-item';

export default {
  name: 'ExhibitionNews',
  data () {
    return {
    }
  },
  components: {
    StVideoItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.exhibition-news{
  margin-left: 19px;
}
</style>
