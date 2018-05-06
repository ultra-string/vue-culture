<template>
  <div class="cm-thumbnail" :style="{width: width+'px',height: height+'px' }">
      
  </div>
</template>

<script>

export default {
  name: 'CmThumbnail',
  props: {
      width: Number,
      height: Number
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-thumbnail{

}
</style>
