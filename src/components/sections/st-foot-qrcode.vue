<template>
    <div class="st-foot-qrcode">
        <img class="attention" src="@/common/images/foot/attention.jpg">
        <div class="qr">
            <img class="qr-pic" src="@/common/images/foot/weichart.jpg" alt="">
            <p class="qr-name">中国手艺网微信</p>
        </div>
        <div class="qr">
            <img class="qr-pic" src="@/common/images/foot/plan.jpg" alt="">
            <p class="qr-name">非遗研培计划</p>
        </div>
        <div class="qr">
            <img class="qr-pic" src="@/common/images/foot/online.jpg" alt="">
            <p class="qr-name">中国手艺网电商</p>
        </div>
        <div class="qr">
            <img class="qr-pic" src="@/common/images/foot/rejuvenation.jpg" alt="">
            <p class="qr-name">传统工艺振兴</p>
        </div>
        <div class="qr">
            <img class="qr-pic" src="@/common/images/foot/study.jpg" alt="">
            <p class="qr-name">研修研培</p>
        </div>
        <div class="qr">
            <img class="qr-pic" src="@/common/images/foot/weibo.jpg" alt="">
            <p class="qr-name">中国手艺网微博</p>
        </div>
    </div>
</template>
<script>
export default {
    name : 'stFootQrcode',
    data (){
        return {}
    },
}
</script>
<style lang="scss" scoped>
.st-foot-qrcode{
    width : 964px;
    min-width : 964px;
    background : #eeeeee;
    @include display-flex;
    @include justify-content-space;
    height : 130px;
    margin : 60px auto;
    padding-right : 36px;

    .attention{
        width : 132px;
        height : 130px;
    }

    .qr{
        width : 122px;
        height : 110px;
        padding-top : 18px;
        text-align : center;

        .qr-pic{
            width : 84px;
            height : 84px;
        }

        .qr-word{
            height : 20px;
            line-height : 20px;
            font-size : 14px;
            color : #222222;
        }
    }
}
</style>


