<template>
  <div class="cm-top-nav-ele">
      <el-menu ref="elmentItem" :default-active="activeIndex" :collapse-transition="false" class="el-menu-demo hand-point" mode="horizontal" @select="handleSelect" :unique-opened="true">
        <el-submenu v-for="(item,key) in options" :key="key" :index="key+''">
            <template slot="title">{{item.oneTitleName}}</template>
            <el-menu-item index="key+'-'+0" @click="toCulureFn(item,(item.oneTitleName=='特别策划'?true:false))">{{item.oneTitleName}}</el-menu-item>
            <el-menu-item v-for="(val , k) in item.twoTitleVOs" :key="k" index="key+'-'+(k+1)" @click="toCulureFn(val)">{{val.twoTitleName}}</el-menu-item>
            </el-submenu>
        </el-submenu>
      </el-menu>
      <cm-swiper
        class="swiper"
        :baseData="bannerHead"
        :height="220"
        :width="1000"
        :showPagination="false"
      ></cm-swiper>
  </div>
</template>

<script>
import CmSwiper from "@/components/cm-swiper";

export default {
  name: "CmTopNavEle",
  props: {
    options: {
      type: Array,
      default: function() {
        return [];
      }
    },
    bannerHead : {
      type : Array,
      default : function(){
        return [];
      }
    }
  },
  data() {
    return {
        activeIndex: '1',
        
    };
  },
  created(){
    console.log(this.options)
  },
  methods: {
    toPathFn: function() {},
    handleSelect: function(key, keyPath) {
      console.log(key, keyPath);
    },
    //跳转文旅资讯
    toCulureFn : function(obj,isSpecialPath){
      if(obj.oneTitleName == '首页'){
        this.$router.push({
          path : '/Index'
        })
      }
      // console.log(this.specialPath)
      if(isSpecialPath){
        this.$router.push({
          path : '/Index/SpecialScheme'
        });
        return;
      }
      if(obj.twoTitleVOs){
        if(obj.oneTitleName == '首页'){
          return;
        }
        this.$router.push({
          path : '/CultureNewsIndex',
          query : {
            oneTitleId : obj.id,
            twoTitleId : '',
            showType : obj.showType,
          }
        })
      }else{
        this.$router.push({
          path : '/CultureNewsIndex',
          query : {
            oneTitleId : obj.oneTitleId,
            twoTitleId : obj.id,
            showType : obj.showType,
          }
        })
      }
    }
  },
  components: {
    CmSwiper,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.swiper{
  margin-top : 30px;
}
.cm-top-nav-ele {
  margin-bottom: 20px;
}
.el-menu-demo{  
  margin-left: -20px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  padding: 0 20px;
  margin: 0px;
  font-size: 16px;
  border: none !important;
  color: #4e4e4e;
}
.el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: $font-hot;
  border-bottom: 1px solid $font-hot !important;
}
.el-menu--horizontal > .el-submenu {
  border-bottom: none;
}
.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  width: 0px;
  height: 0px;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.el-submenu__title {
  padding: 0px;
  margin: 0px;
}
.el-submenu {
  padding: 0px;
  margin: 0px;
}
</style>
