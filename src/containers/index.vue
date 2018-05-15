<template>
  <div class="indexPage">
  
  </div>
</template>

<script>
import Lib from '@/common/lib/lib.js'

export default {
  name: 'Index',
  data () {
    return {
      bodyList: {
        pageNo: 1,
        pageSize: 1,
        twoId: 1,
        oneId: 1
      }
    }
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
}
</style>
