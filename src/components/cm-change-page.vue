<template>
  <div class="cm-change-page clearfix" :class="hasTopLine ? 'top-line' : '' ">
      <div class="clearfix fr">
        <div class="fl">
            <span>目前在第</span>
            <span class="hot">{{data.pageNum ? data.pageNum : 1}}</span>
            <span>页，共有</span>
            <span class="hot">{{data.pages ? data.pages : 0}}</span>
            <span>页，共有</span>
            <span class="hot">{{data.total ? data.total : 0}}</span>
            <span>条记录</span>
        </div>
        <div class="fl to-page">
            <span>跳转</span>
            <input type="text" v-bind="toPage" id="jumpnote" v-model="mobile" @keyup="log">
            <span>页</span>
            <span class="point to-btn click-btn" @click="changePageFn('')">Go</span>
            <i @click="changePageFn(-1)" class="to-btn click-btn">上一页</i>
            <i class="middle to-btn click-btn" @click="changePageFn(1)">下一页</i>
            <i @click="changePageFn(data.total)" class="to-btn click-btn">最后一页</i>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "CmChagePage",
  props: {
    hasTopLine: {
      type: Boolean,
      default: true
    },
    navTree: Array,
    data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      toPage: "",
      mobile: ""
    };
  },
  methods: {
    changePageFn: function(page) {
      let toPage;
      if (!page) {
        page = Number(jumpnote.value);
        toPage = page;
      } else {
        toPage = page + this.data.pageNum;
      }
      if (!this.data.hasPreviousPage && page == -1) {
       
        return;
      } else if (!this.data.hasNextPage && page == 1) {
        
        return;
      } else {
        this.$emit("changePageFn", toPage);
      }
    },
    log: function() {
      this.mobile = this.mobile.replace(/[^\d]/g, "");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#jumpnote{
  height: 20px;
  width: 60px;
  position: relative;
  top: -2px;
}
.cm-change-page {
  width : 100%;
  // line-height: 59px;
  padding-top : 20px;
  // margin-bottom: 42px;
  .hot {
    color: $font-hot;
  }
  .to-page {
    margin-left: 45px;
    .to-btn:hover{
      color: $font-hot;
    }
    input {
      width: 32px;
      height: 11px;
      border: 1px solid rgb(78, 78, 78);
    }
    i{
      cursor:pointer;
    }
    .point{
      cursor:pointer;
    }
    .middle {
      display: inline-block;
      margin: 0 19px;
    }
  }
}
.top-line {
  border-top: 2px solid #e9e9e9;
}
</style>
