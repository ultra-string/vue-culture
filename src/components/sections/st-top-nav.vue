<template>
  <div class="top-nav">
    <div class="nav clearfix">
      <div class="clearfix fl">
        <div class="home-page fl">设置为首页</div>
        <!-- 下拉框组件 -->
        <cm-select 
        class="fl"
        style="marginLeft:19px"
        :selectValue="selectValue"
        :options="options"
        :width="70"
        @changeCurType="changeCurType"
        ></cm-select>
      </div>
      <div class="fr clearfix">
        <div class="fl" @click="toLogin">登录</div>
        <div class="fl" @click="toRegister">注册</div>
        <!-- <div class="fl">网站导航</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CmSelect from '@/components/cm-select';
import { mapGetters } from 'vuex';

export default {
  name: 'TopNav',
  data () {
    return {
      newMediaListShow: false,
      options: [],
      selectValue: '新媒体',
      resData : '',
    }
  },
  components: {
    CmSelect
  },
  computed: {
    ...mapGetters([
      'sessionId'
    ])
  },
  created() {
    this.$get('/index').then(res => {
        this.resData = res.data;
        this.options = this.resData.titleLinkMap[0];
    })
  },
  methods: {
    newMediaList: function() {
      this.newMediaListShow = !this.newMediaListShow;
    },
    //跳转登录界面
    toLogin : function(){
      console.log(encodeURIComponent(this.$route.fullPath))
      this.$router.push({
        path : '/login',
        query : {
          to : encodeURIComponent(this.$route.fullPath)
        }
      });
    },
    //跳转注册界面
    toRegister : function(){
      this.$router.push({
        path : '/login/register',
        query : {
          to : encodeURIComponent(this.$route.fullPath)
        }
      })
    },
    changeCurType : function(key){
      // console.log('https://' + this.options[key].url)
      // window.open(this.options[key].url)
      window.open('https://' + this.options[key].url)
      // window.location.href = 'https://' + this.options[key].url
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top-nav{
  background: rgb(252,252,252);
  width:100%;
  line-height:40px;
  border-top: 2px solid red;
  border-bottom: 2px solid rgb(238,238,240);
  .nav{
      position: relative;
      width:1000px;
      margin:0 auto;
      min-width: 1000px;
      // width:expression(document.body.clientWidth < 1000? "1000px": "auto" ); 
      .home-page{
        color: $font-hot;
      }
  }
  .nav > div + div > div{
    margin-left: 25px;
  }  
}
</style>
