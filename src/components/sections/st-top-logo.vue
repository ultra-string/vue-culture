<template>
  <div class="st-top-logo clearfix">
    <h1 class="fl">中国手艺网</h1>
    <div class="fr">
        <div class="clearfix">
            <div class="clearfix serchInput fl">
                <!-- 下拉框组件 -->
                <cm-select 
                class="fl"
                style="marginLeft:19px,lineHeight:38px;padding:0 8px"
                :selectValue="selectValue"
                :options="options"
                :width="46"
                ></cm-select>
                <span class="fl"></span>
                <input type="text" value="" class="fl" placeholder="我是输入框" id="searchInp">
            </div>
            <img src="@/common/images/index/search-hot.png" alt="搜索按钮" @click="toSerachFn">
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
          label: '新闻',
          type : '0'
        }, {
          value: '选项2',
          label: '娱乐',
          type : '1'
        }, {
          value: '选项3',
          label: 'happy',
          type : '2'
        }],
        selectValue: '新闻',
        curType : '0'
    }
  },
  components: {
      CmSelect
  },
  methods : {
      toSerachFn : function(){
          //搜索
          let note = searchInp.value;
          if(!note){
              alert('请输入搜索内容');
              return;
          }
          this.$post('/search' , {
            "pageNo": 0,
            "pageSize": 0,
            "param": note,
            "type": 0
          }).then(res => {
              console.log(res)
          })
      },
      changeCurType : function(typeIndex){
          this.curType = typeIndex;
      }
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
    div {
        .serchInput{
            border: 1px solid $color-border-input;
            border-radius: 2px 0 0 2px;
            padding-left: 6px;
            >span{
                width:1px;
                height:34px;
                border-left: 1px solid $color-border-input;
                margin:2px auto;
            }
            input{
                width: 254px;
                padding:0 4px;
                line-height: 38px;
                font-size: 16px;
            }
        }
        ~img {
            padding: 2px 0;
            background: rgb(178,48,35);
        }
    }
}
</style>
