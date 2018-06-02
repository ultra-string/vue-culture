<template>
    <div class="st-foot-qrcode">
        <img class="attention" src="@/common/images/foot/attention.jpg">
        <div class="qr" v-for="(item , k) in mark" :key="k">
            <img class="qr-pic" :src="item.url" alt="图片加载失败">
            <p class="qr-name">{{item.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name : 'stFootQrcode',
    data (){
        return {}
    },
    props : {
        mark : {
            type : Array,
            default : function(){
                return []
            }
        }
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
            display : block;
            margin : 0 auto;
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


