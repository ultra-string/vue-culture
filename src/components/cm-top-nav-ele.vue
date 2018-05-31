<template>
  <div class="cm-top-nav-ele">
      <el-menu ref="elmentItem" :default-active="activeIndex" :collapse-transition="false" class="el-menu-demo" mode="horizontal" @select="handleSelect" :unique-opened="true">
        <el-submenu v-for="(item,key) in options" :key="key" :index="key+''">
            <template slot="title">{{item.oneTitleName}}</template>
            <el-menu-item index="key+'-'+0">{{item.oneTitleName}}</el-menu-item>
            <el-menu-item v-for="(val , k) in item.twoTitleVOs" :key="k" index="key+'-'+(k+1)">{{val.twoTitleName}}</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "CmTopNavEle",
  props: {
    options: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
        activeIndex: '1',
    };
  },
  methods: {
    toPathFn: function() {},
    handleSelect: function(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    //   console.log(this.options)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.cm-top-nav-ele {
  margin-bottom: 20px;
  margin-left: -10px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  padding: 0 10px;
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
