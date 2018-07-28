<template>
  <div class="st-top-logo clearfix">
    <h1 class="fl hand-point" @click="toIndexfn">中国手艺网</h1>
    <div class="fl" style="margin-left:50px;">
        <div class="clearfix">
            <div class="clearfix serchInput fl">
                <!-- 下拉框组件 -->
                <cm-select 
                class="fl"
                style="marginLeft:19px,lineHeight:38px;padding:0 8px"
                :selectValue="selectValue"
                :options="options"
                :width="70"
                @changeCurType="changeCurType"
                ></cm-select>
                <span class="fl"></span>
                <input type="text" value="" class="fl"  id="searchInp">
            </div>
            <!-- <img src="@/common/images/index/search-hot.png" alt="搜索按钮" @click="toSerachFn" class="hand-point"> -->
            <el-button type="primary" @click="toSerachFn" class="search-inp"></el-button>
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
          name: '标题',
          type : '0'
        }, {
          value: '选项2',
          name: '作者',
          type : '1'
        }, {
          value: '选项3',
          name: '关键词',
          type : '2'
        }],
        selectValue: '标题',
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
          if(note.length > 20){
              alert('超出长度')
          }
          console.log(this.curType)
          this.$router.push({
              name : 'SearchView',
              query : {
                  type : this.curType
              },
              params : {
                  str : note
              }
          })
          searchInp.value = '';
      },
      changeCurType : function(key){
        //   alert(key)
          this.curType = this.options[key].type;
          this.selectValue = this.options[key].name;
      },
      toIndexfn : function(){
          this.$router.push({
              path : '/Index'
          })
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
    #searchInp{
        height : 38px;
        line-height : 38px;
    }
    .search-inp{
        width : 70px;
        height : 40px;
        border-radius : 0;
        background : url('./../../common/images/index/search-hot.png') no-repeat;
        background-size : contain;
        background-color : $font-hot;
        margin-top : 1px;
        // background
        // background : '@/common/images/index/search-hot.png';
    }
    >h1{
        width: 361px;
        height: 38px;
        text-indent: -999em;
        // background: url(~@/common/images/index/culture-logo.png);
        background: url('./../../common/images/index/culture-logo.png');
        background-size:100% 100%;
    }
    div {
        .serchInput{
            border: 1px solid $color-border-input;
            border-radius: 2px 0 0 2px;
            padding-left: 6px;
            margin-top : 1px;
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
            height : 36px;
        }
    }
}
</style>
