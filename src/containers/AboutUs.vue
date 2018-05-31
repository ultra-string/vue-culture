<template>
    <div class="about-us">
        <!-- 关于我们 -->
        <!-- <cm-video-player></cm-video-player> -->
        <cm-bradcrumb
            style="margin:18px 0;lineHeight: 45px;fontSize:19px"
            :navTree="navTree"
        ></cm-bradcrumb>
        <h1>联系我们</h1>
        <p>总部地址：北京市西城区新文化街56号  </p>
        <p>电话：010-63323856</p>
    </div>
</template>

<script>
import CmVideoPlayer from '@/components/cm-video-player';
import CmBradcrumb from '@/components/cm-breadcrumb';


export default {
    name : 'AboutUs',
    data (){
        return {
            navTree: [
                {
                    name: '首页',
                    path: 'CultureNews',
                    url: '',
                    nowPage: false,
                    isOuter: false
                },
                {
                    name: '联系我们',
                    path: 'CultureNews',
                    url: '',
                    nowPage: false,
                    isOuter: false
                }
            ],
        }
    },
    components: {
        CmVideoPlayer,
        CmBradcrumb
    },
    created() {
        console.log(this.$route.meta)
    }
}
</script>

<style lang="scss" scoped>
.about-us{
    h1{
        line-height : 100px;
        text-align : center;
        font-size : 36px;
    }
    p{
        font-size : 16px;
        margin-bottom : 50px;
    }
}
</style>