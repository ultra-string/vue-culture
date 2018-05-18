<template>
    <div class="detail">
        <cm-bradcrumb
        style="margin:18px 0;lineHeight: 45px;fontSize:19px"
        :navTree="navTree"
        ></cm-bradcrumb>
        <div class="news-detail">
            <h2>{{detialMsg.bodyTitle}}</h2>
            <div class="detail-info clearfix">
                <div>
                    {{detialMsg.createTime}}
                </div>
                <div v-if="detialMsg.auther == null">
                    <span>作者：</span>
                    <span>{{detialMsg.auther}}</span>
                </div>
                <div>
                    <span>来源：</span>
                    <span>中国手艺网</span>
                </div>
            </div>
        </div>
        <div>
            <cm-video-player></cm-video-player>
            <div>{{detialMsg.body}}</div>
        </div>

    </div>
</template>

<script>
import CmBradcrumb from '@/components/cm-breadcrumb';
import CmVideoPlayer from '@/components/cm-video-player';

export default {
    name : 'Detail',
    data (){
        return {
            detialMsg: {},
            navTree: [{
                name: '首页',
                path: 'CultureNews',
                url: '',
                nowPage: false,
                isOuter: false
            },{
                name: '文旅资讯',
                path: 'CultureNews',
                url: '',
                nowPage: false,
                isOuter: false
            }],
        }
    },
    components: {
        CmBradcrumb,
        CmVideoPlayer
    },
    created() {
        console.log('aaa=>',this.$route.params.id)
        let id = this.$route.params.id ? this.$route.params.id : 1;
        this.$get(`/body/${id}`)
        .then( res => {
            this.detialMsg = Object.assign({}, res.data);
        })
    }
}
</script>

<style lang="scss" scoped>
.detail{
    .news-detail{
        h2{
            line-height: 81px;
            font-size: 32px;
            font-weight:bold; 
            text-align: center;
            border-bottom: 1px solid $color-border-input;
        }
        .detail-info{
            line-height: 22px;
            font-size: 12px;
            border-bottom: 1px solid $color-border-input;
            div {
                float: left;
                margin-right: 20px;
            }
        }
    }
}
</style>