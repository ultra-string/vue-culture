<template>
    <div class="cm-share">
        <!-- Baidu Button BEGIN -->
        <!-- //在页面中加入文字式分享按钮 -->
        <div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">
            <a class="bds_qzone">QQ空间</a>
            <a class="bds_tsina">新浪微博</a>
            <a class="bds_tqq">腾讯微博</a>
            <a class="bds_renren">人人网</a>
            <span class="bds_more">更多</span>
        </div>
        <!-- //加入另一个按钮式分享按钮 -->
        <!-- <div id="bdshare" class="bdshare_b"><img src="images/type-button-1.jpg" /></div> -->
    </div>
</template>

<script>

export default {
  name: 'CmShare',
  data() {
    return {
    }
  },
  mounted() {
    document.getElementById('bdshell_js').src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);
  }
}
</script>

<style>
.cm-share{
    width: 100%;
}
</style>
