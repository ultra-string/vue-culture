<template>
  <div class="cm-list-nav clearfix">
      <i class="fl"></i>
      <h3 class="fl">红色标题</h3>
      <div class="fl clearfix">
        <span class="fl"></span>
        <div class="fl"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "cm-select",
  props: {
    options: Array,
    selectValue: String,
    propswidth: String,
    width: Number,
    marginLeft: Number
  },
  data() {
    return {
      newMediaListShow: false
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-list-nav {
  height: 40px;
  line-height: 40px;
  i{
    width: 6px;
    height: 6px;
    margin: 10px 2px 0 0;
    border-radius: 100%;
    background: $font-hot;
  }
  h3{
    color: $font-hot;
    border-bottom: 3px solid $font-hot;
    height: 24px;
    line-height: 24px;
    padding-bottom: 2px;
  }
  div{
    span{
      width: 8px;
      height: 8px;
      border-top: 2px solid $color-border-input;
      transform:rotate(7deg);
      -ms-transform:rotate(7deg); 	/* IE 9 */
      -moz-transform:rotate(7deg); 	/* Firefox */
      -webkit-transform:rotate(7deg); /* Safari 和 Chrome */
      -o-transform:rotate(7deg); 	/* Opera */
    } 
  }
}
</style>
