<template>
  <div class="top-nav">
    <div class="nav clearfix">
      <div class="clearfix fl">
        <!-- <a class="home-page hand-point fl" id="setHome" @click="setHomePage">设置为首页</a> -->
        <!-- 下拉框组件 -->
        <cm-select 
          class="fl hand-point"
          style="marginLeft:19px"
          :selectValue="selectValue"
          :options="options"
          :width="70"
          @changeCurType="changeCurType"
        ></cm-select>
      </div>
      <div class="fr clearfix">
        <div class="fl hand-point" @click="toLogin" v-if="!userName">登录</div>
        <div class="fl hand-point" v-else>{{userName}}</div>
        <div class="fl hand-point" v-if="!userName" @click="toRegister">注册</div>
        <div class="fl hand-point" v-else @click="outFn">退出</div>
        <!-- <div class="fl">网站导航</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CmSelect from "@/components/cm-select";
import { mapGetters } from "vuex";

export default {
  name: "TopNav",
  data() {
    return {
      newMediaListShow: false,
      options: [],
      selectValue: "新媒体",
      resData: '',
      userName : '',
    };
  },
  components: {
    CmSelect
  },
  computed: {
    ...mapGetters(["sessionId","token"])
  },
  created() {
    this.$get("/index").then(res => {
      this.resData = res.data;
      this.options = this.resData.titleLinkMap[0];
    });
    this.getUser();
  },
  watch: {  
    '$route' (to, from) {  
        // console.log(this.$route.query) 
        if(to.fullPath != from.fullPath){
            // console.log(to.fullPath,from.fullPath)
            if(!this.userName && this.token){
              this.getUser();
            }
        } 
    }  
  },
  methods: {
    getUser : function(){
      // console.log('========')
      // console.log(this.token)
      this.$get('/user').then(res => {
        // console.log('dfdfdf')
        // console.log(res)
        if(res.code == '000000' && res.data){
          //成功
          this.userName = res.data.username;
        }else if(res.code == '111111'){
          alert(res.msg);
          this.userName = '';
          return;
        }
      })
      // console.log('========')
    },
    newMediaList: function() {
      this.newMediaListShow = !this.newMediaListShow;
    },
    //跳转登录界面
    toLogin: function() {
      console.log(encodeURIComponent(this.$route.fullPath));
      this.$router.push({
        path: "/login",
        query: {
          to: encodeURIComponent(this.$route.fullPath)
        }
      });
    },
    //跳转注册界面
    toRegister: function() {
      this.$router.push({
        path: "/login/register",
        query: {
          to: encodeURIComponent(this.$route.fullPath)
        }
      });
    },
    changeCurType: function(key) {
      window.open(this.options[key].url);
    },
    outFn : function(){
      this.$authored('/user/logout').then(res => {
        if(res.code == '000000'){
          sessionStorage.removeItem('token');
          this.$store.dispatch('STORE_TOKEN', '');
          this.userName = '';
          location.reload();
        }
      })
    },
    setHomePage: function() {
      var obj = setHome;
      console.log(obj)
      var aUrls = document.URL.split("/");
      var vDomainName = "http://" + aUrls[2] + "/";
      try{
            obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
            if(window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                }
                catch (e) {
                    alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage',vrl);
            }
        }
      if (window.netscape) alert("设置首页成功！");
      return false; //阻止a标签继续执行
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top-nav {
  background: rgb(252, 252, 252);
  width: 100%;
  line-height: 40px;
  // border-top: 2px solid red;
  border-bottom: 2px solid rgb(238, 238, 240);
  .nav {
    position: relative;
    width: 1000px;
    margin: 0 auto;
    min-width: 1000px;
    // width:expression(document.body.clientWidth < 1000? "1000px": "auto" );
    .home-page {
      color: $font-hot;
      display : block;
    }
  }
  .nav > div + div > div {
    margin-left: 25px;
  }
}
</style>
