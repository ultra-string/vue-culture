<template>
  <div class="cm-select">
    <!-- <div :style="{width:width+'px'}" class="down-select clearfix fl" @click.stop="newMediaList">
        <div class="fl">{{selectValue}}</div>
        <span class="fr" :class="newMediaListShow ? 'icon-top' : 'icon-bottom' "></span> 
        <transition name="fade">
        <ul class="list" v-show="newMediaListShow">
            <li v-for="(val, key) in options" :key="key" @click="changeCurType(key)">{{val.name}}</li>
        </ul>
        </transition>
    </div> -->
    <el-dropdown size="'medium'" @command="handleCommand" :style="{width:width+'px','font-size':'16px'}" class="down-select clearfix fl">
        <span class="el-dropdown-link down-select">
            {{selectValue}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(val, key) in options" :key="key" :command="key" @click="changeCurType(key)">{{val.name}}</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
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
    marginLeft: Number,
    toOthers: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newMediaListShow: false,
      curType: "0",
      activeIndex: "1"
    };
  },
  methods: {
    handleCommand(command) {
        this.$emit("changeCurType", command);
    },
    newMediaList: function() {
      this.newMediaListShow = !this.newMediaListShow;
    },
    changeCurType: function(key) {
      this.$emit("changeCurType", key);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cm-select {
  position: relative;
  margin: 0 !important;
  .icon-bottom {
    display: inline-block;
    margin-top: 12px;
    border-left: 2px solid $font-hot;
    border-bottom: 2px solid $font-hot;
    width: 9px;
    height: 9px;
    transform: rotate(-45deg);
  }
  .icon-top {
    display: inline-block;
    margin-top: 16px;
    border-right: 2px solid $font-hot;
    border-top: 2px solid $font-hot;
    width: 9px;
    height: 9px;
    transform: rotate(-45deg);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .list {
    position: absolute;
    top: 40px;
    padding: 0 10px;
    left: -5px;
    width: 120px;
    z-index: 10;
    border: 1px solid #ccc;
    background: #fff;
    li {
      width: 100%;
      @include nowrap-ellipsis;
    }
  }
}
</style>
