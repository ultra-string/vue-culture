<template>
  <div class="demo">
    {{msg}}
  </div>
</template>

<script>
import api from "./../axios/api";
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Login Component'
    }
  },
  computed: {
    ...mapGetters([
      'sessionId'
    ])
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
