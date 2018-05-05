<template>
  <div class="st-top-logo clearfix">
    <h1 class="fl">中国手艺网</h1>
    <div class="fr">
        <div class="clearfix serchInput">
            <!-- 下拉框组件 -->
            <cm-select 
            class="fl"
            style="marginLeft:19px,lineHeight:38px;padding:0 8px"
            :selectValue="selectValue"
            :options="options"
            :width="46"
            ></cm-select>
            <span class="fl"></span>
            <input type="text" class="fl">
        </div>
    </div>
  </div>
</template>

<script>
import CmSelect from '@/components/cm-select';

export default {
  name: 'StTopLogo',
  data () {
    return {
        options: [{
          value: '选项1',
          label: '新闻'
        }, {
          value: '选项2',
          label: '娱乐'
        }, {
          value: '选项3',
          label: 'happy'
        }],
        selectValue: '新闻',
    }
  },
  components: {
      CmSelect
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.st-top-logo{
    width: 100%;
    margin: 43px 0;
    line-height: 38px;
    >h1{
        width: 361px;
        height: 38px;
        text-indent: -999em;
        background: url(~@/common/images/index/culture-logo.png);
        background-size:100% 100%;
    }
    .serchInput{
        border: 1px solid $color-border-input;
        border-radius: 2px;
        padding-left: 6px;
        >span{
            width:1px;
            height:34px;
            border-left: 1px solid $color-border-input;
            margin:2px auto;
        }
    }
}
</style>
