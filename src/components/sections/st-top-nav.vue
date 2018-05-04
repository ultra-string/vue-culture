<template>
  <div class="top-nav">
    <div class="nav clearfix">
      <div class="clearfix fl">
        <div class="home-page fl">设置为首页</div>
        <div class="down-select clearfix fl" @click.stop="newMediaList">
          <div class="fl">新媒体</div>
          <span class="fr" :class="newMediaListShow ? 'icon-top' : 'icon-bottom' "></span> 
          <transition name="fade">
            <ul class="list" v-show="newMediaListShow">
              <li v-for="(val, key) in options" :key="key">{{val.label}}</li>
            </ul>
          </transition>
        </div>
      </div>
      <div class="fr clearfix">
        <div class="fl">登录</div>
        <div class="fl">注册</div>
        <div class="fl">网站导航</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TopNav',
  data () {
    return {
      newMediaListShow: false,
      msg: '我是吸顶条',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  computed: {
    ...mapGetters([
      'sessionId'
    ])
  },
  created() {
  },
  methods: {
    newMediaList: function() {
      this.newMediaListShow = !this.newMediaListShow;
    }
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
      width:expression(document.body.clientWidth < 1000? "1000px": "auto" ); 
      .home-page{
        color: $font-hot;
      }
      .down-select{
        position: relative;
        margin-left: 19px;
        width:70px;
        .icon-bottom{
          display: inline-block;  
          margin-top: 12px;  
          border-left: 2px solid $font-hot; 
          border-bottom: 2px solid $font-hot;  
          width: 9px; 
          height: 9px;  
          transform: rotate(-45deg); 
        }
        .icon-top{
          display: inline-block;  
          margin-top: 16px;  
          border-right: 2px solid $font-hot; 
          border-top: 2px solid $font-hot;  
          width: 9px; 
          height: 9px;  
          transform: rotate(-45deg); 
        }
        .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
          opacity: 0;
        }
        .list{
          position: absolute;
          top: 40px;
          padding: 0 10px;
          left: -5px;
          width: 100px;
          z-index:10;
          border: 1px solid #ccc;
          background: #fff;
        }
      }
  }
  .nav > div + div > div{
    margin-left: 25px;
  }  
}
</style>
