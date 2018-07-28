<template>
  <div class="cm-top-nav-ele">
      <el-menu ref="elmentItem" :default-active="activeIndex" menu-trigger="hover" :collapse-transition="false" class="el-menu-demo clearfix hand-point" mode="horizontal" @select="handleSelect" :unique-opened="true">
        <el-submenu v-for="(item,key) in options" :key="key" :index="key+''" class="fl" :style="{'padding-left':key==0?0:key==1?'14px':'35px'}">
            <!-- <template slot="title" @row-click="toPath">{{item.name}}</template> -->
            <el-menu-item index="key+''" slot="title" @click="toPath(item)" class="title-xxx-box">{{item.name}}</el-menu-item>
            <el-menu-item v-for="(val , k) in item.childVos" :key="k" index="key+'-'+k" @click="toCulureFn(val,item.id)" class="two-ele-box">{{val.name}}</el-menu-item>
            </el-submenu>
        </el-submenu>
      </el-menu>
      <cm-swiper
        class="swiper"
        :baseData="bannerHead"
        :height="220"
        :width="1000"
        :showPagination="true"
      ></cm-swiper>
  </div>
</template>

<script>
import CmSwiper from "@/components/cm-swiper";
import { mapGetters } from "vuex";

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
    // console.log(this.options)
  },
  methods: {
    handleSelect: function(key, keyPath) {
      // console.log(key, keyPath);
    },
    //跳转文旅资讯
    toCulureFn : function(obj,id){
      // console.log(obj.showType)
      this.$router.push({
        path : '/CultureNewsIndex',
        query : {
          oneTitleId : id,
          twoTitleId : obj.id,
          showType : obj.showType,
          // showType : 1,
        }
      })

    },
    toPath : function(item){
      if(item.isLink == 0){
        //二级界面
        this.toOnePath(item);
      }else if(item.isLink == 1){
        if(!item.url)return;
        window.open(item.url);
      }else if(item.isLink == 2){
        this.$router.push({
          path : '/'
        });
        return;
      }
    },
    toOnePath : function(obj){
      this.$router.push({
        path : '/CultureNewsIndex',
        query : {
          oneTitleId : obj.id,
          twoTitleId : '',
          showType : obj.showType,
          // showType : 1,
        }
      })
    },
  },
  components: {
    CmSwiper,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.cm-top-nav-ele{
  width : 100%;
}
.el-submenu__title .title-xxx-box{
  padding : 0;
  min-width : 50px;
  color : #000;
  background : #fff;
  font-size : 16px;
}
.el-menu-demo{
  width: 100%;
  // display: flex;
  // justify-content: space-between;
  // @include display-flex;
  // @include justify-content-space
}
.swiper{
  margin-top : 30px;
}
.cm-top-nav-ele {
  margin-bottom: 20px;
}
.el-menu{  
  // margin-left: -15px;
  padding : 0;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  // padding: 0 16px;
  padding : 0;
  margin: 0px;
  font-size: 16px;
  border: none !important;
  color: #4e4e4e;
  line-height : 30px !important;
  height : 30px !important;
}
.el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: $font-hot;
  border-bottom: 1px solid $font-hot !important;
}
.el-menu--horizontal > .el-submenu:hover .title-xxx-box{
  color : $font-hot;
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
  padding-right : 2px;
  margin: 0px;
}
.el-menu--horizontal .el-menu .two-ele-box{
  width : 100px !important;
  padding-right : 0 !important;
}
.el-menu--horizontal .el-menu--popup{
  width : 110px;
  min-width : 11px;
  padding : 0 !important;
}
</style>
