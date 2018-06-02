<template>
    <div class="detail">
        <cm-bradcrumb
        style="margin:18px 0;lineHeight: 45px;fontSize:19px"
        :navTree="navTree"
        ></cm-bradcrumb>
        <div class="news-detail">
            <h2>{{detialMsg.bodyTitle}}</h2>
            <div class="detail-info clearfix">
                <div v-if="detialMsg.createTime">
                    {{detialMsg.createTime | getTimeYMD}}
                </div>
                <div v-if="detialMsg.auther == null">
                    <span>作者：</span>
                    <span>{{detialMsg.author}}</span>
                </div>
                <div>
                    <span>来源：</span>
                    <span>中国手艺网</span>
                </div>
            </div>
        </div>
        <div class="content clearfix">
            <div class="content-box fl">
                <cm-video-player
                    v-if="detialMsg.videoUrl"
                    :src="detialMsg.videoUrl"
                    :width="'754px'"
                    :height="'426px'"
                ></cm-video-player>
                <div v-html="detialMsg.body"></div>
                <st-comment></st-comment>
            </div>
            <div class="conent-adv fr">
                <h1>相关文章</h1>
                <div v-if="wordArr && wordArr.length" class="cm-news-list hand-point clearfix font-color" v-for="(val, key) in wordArr"
                    :key="key" @click="toDetail(val)">
                    <i class="fl"></i>
                    <h3 class="fl font-color">{{val.bodyTitle}}</h3>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import CmBradcrumb from '@/components/cm-breadcrumb';
import CmVideoPlayer from '@/components/cm-video-player';
import StComment from '@/components/sections/st-comment';
import CmShare from '@/components/cm-share'

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
            params : '',
            wordArr : [],
        }
    },
    components: {
        CmBradcrumb,
        CmVideoPlayer,
        StComment,
        CmShare
    },
    created() {
        this.initFn();
    },
    watch: {  
        '$route' (to, from) {  
            console.log(this.$route.query) 
            if(to.fullPath != from.fullPath){
                this.initFn();
            } 
        }  
    },
    methods : {
        initFn : function(){
            this.params = this.$route.query;
            let params = this.params;
            let id = params.id;
            let oneTitleId = params.oneTitleId;
            let twoTitleId = params.twoTitleId ? twoTitleId : '';
            this.$get(`/body/${id}`)
            .then( res => {
                this.detialMsg = Object.assign({}, res.data);
                console.log(this.detialMsg)
                console.log(res)
                this.wordArr = res.data.relatedBodys;
                //test
                // this.detialMsg.videoUrl = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
            })
        },
        //跳文章详情
        toDetail: function (obj) {
            this.$router.push({
            query: {
                oneTitleId: obj.oneTitleId,
                twoTitleId: obj.twoTitleId,
                id: obj.id
            },
            params: {
                id: obj.id
            },
            name: 'Details',
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.detail{
    width : 1000px;
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
    .content{
        width : 100%;
        margin-top : 24px;
        .content-box{
            width : 754px;
        }
        .conent-adv{
            width : 208px;
            height :100px;
            // background : red;
            h1{
                font-size :22px;
                color : $font-hot;
                line-height : 30px;
                border-bottom : 3px solid $font-hot;
                margin-bottom : 10px;
            }
        }
    }
    .cm-news-list{
        // width : 472px;
        line-height : 34px;
        // height : 34px;
        i {
            width: 6px;
            height: 6px;
            border-radius: 100%;
            background: $font-hot;
            margin: 15px 8px 0 0; 
        }
        h3 {
            vertical-align: top;
            max-width: 90%;
            @include nowrap-ellipsis;
        }
    }
    .font-color{
      color : #4c6f95;
    }
}
</style>