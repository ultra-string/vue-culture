<template>
  <div class="indexPage">
    <div>
      <cm-swiper
      class="swiper"
      :baseData="baseData"
      :height="330"
      ></cm-swiper>
    </div>
  </div>
</template>

<script>
import Lib from '@/common/lib/lib.js'
import CmSwiper from '@/components/cm-swiper'

export default {
  name: 'Index',
  data () {
    return {
      bodyList: {
        pageNo: 1,
        pageSize: 1,
        twoId: 1,
        oneId: 1
      },
      baseData: [
        {
          IMG_URL: require('@/common/images/index/modelbg.png'),
          link: 'https://www.baidu.com'
        },
        {
          IMG_URL: require('@/common/images/index/newUserAlert.png'),
          link: 'https://www.taobao.com'
        },
        {
          IMG_URL: require('@/common/images/index/oldAlert.png'),
          link: 'https://www.souhu.com'
        }
      ]
    }
  },
  components: {
    CmSwiper
  },
  created() {

    this.$post(`/body/page/oneId?${Lib.json2url(this.bodyList)}`)
    .then(res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.indexPage{
  position: relative;
  div {
    margin-top: 42px;
    .swiper{
      width: 488px;
    }
  }
  
}
</style>
