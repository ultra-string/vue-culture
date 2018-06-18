<template>
    <div class="cm-share">
        <!-- Baidu Button BEGIN -->
        <!-- //在页面中加入文字式分享按钮 -->
        <!-- <div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">
            <a class="bds_qzone">QQ空间</a>
            <a class="bds_tsina">新浪微博</a>
            <a class="bds_tqq">腾讯微博</a>
            <a class="bds_renren">人人网</a>
            <a class="bds_weixin">微信</a>
            //<span class="bds_more">更多</span>
        </div> -->
        <div class="bdsharebuttonbox" data-tag="share_0">
            <a href="javascript:void(0)" class="bds_weixin" data-cmd="weixin" title="分享到微信">微信</a>
            <a href="javascript:void(0)" class="bds_qzone" data-cmd="qzone" title="分享到qq空间">qq空间</a>
            <a href="javascript:void(0)" class="bds_tsina" data-cmd="tsina" title="分享到新浪">新浪</a>
            <a href="javascript:void(0)" class="bds_renren" data-cmd="renren" title="分享到人人">人人</a>
        </div>
        <!-- //加入另一个按钮式分享按钮 -->
        <!-- <div id="bdshare" class="bdshare_b"><img src="images/type-button-1.jpg" /></div> -->
        <!-- <div class="bdsharebuttonbox">
            <a href="#" class="bds_more" data-cmd="more"></a>
            <a href="#" class="bds_qzone" data-cmd="qzone"></a>
            <a href="#" class="bds_tsina" data-cmd="tsina"></a>
            <a href="#" class="bds_tqq" data-cmd="tqq"></a>
            <a href="#" class="bds_renren" data-cmd="renren"></a>
            <a href="#" class="bds_weixin" data-cmd="weixin"></a>
        </div> -->
    </div>
</template>

<script>
export default {
  name: "CmShare",
  data() {
    return {};
  },
  props : {
    bodyTitle : {
        type : String,
        default : '',
    },
    summary : {
        type : String,
        default : '',
    }
  },
  mounted() {
    //获取不到？
    // document.getElementById("bdshell_js").src =
    //   "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" +
    //   Math.ceil(new Date() / 3600000);

    let _this = this;
    this.$nextTick(function () {
        window._bd_share_config = {
            common : {
                bdText : this.bodyTitle,
                bdDesc : this.summary,
                bdUrl : window.location.href + '',
            },
            share : [{
                tag:"share_0",
                bdSize : 24
            }],
        };
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + Math.ceil(new Date() / 3600000);
        document.body.appendChild(s);
    })
  }
};
</script>

<style>
.cm-share {
  width: 100%;
  line-height: 100%;
  height: 100%;
  margin-top: 15px;
  .bdshare_t {
    width: 100%;
    a {
      margin-top: 10px;
      display: block;
    }
  }
}
</style>
