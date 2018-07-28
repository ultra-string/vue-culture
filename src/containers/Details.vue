<template>
    <div class="detail">
        <cm-bradcrumb
        style="margin:18px 0;lineHeight: 45px;fontSize:19px"
        ref="breadcrumb"
        ></cm-bradcrumb>
        <div class="news-detail">
            <h2>{{detialMsg.bodyTitle}}</h2>
            <div class="detail-info clearfix">
                <div v-if="detialMsg.createTime">
                    {{detialMsg.createTime | getTimeYMD}}
                </div>
                <div v-if="detialMsg.author">
                    <span>作者：</span>
                    <span>{{detialMsg.author}}</span>
                </div>
                <!-- <div v-if="detialMsg.keywords">
                    <span>关键字：</span>
                    <span>{{detialMsg.keywords}}</span>
                </div> -->
                <div>
                    <span>来源：</span>
                    <span>{{detialMsg.articleSource}}</span>
                </div>
            </div>
        </div>
        <div class="content clearfix">
            <div class="content-box fl">
                <cm-video-player
                    v-if="detialMsg.videoUrl"
                    :src="detialMsg.videoUrl"
                    :width="'400px'"
                    :height="'300px'"
                    :imgUrl="detialMsg.frontViewUrl"
                    style="margin:'0 auto'"
                ></cm-video-player>
                <div v-if="detialMsg.videoUrl" style="text-align:center;">{{detialMsg.videoPresentation}}</div>

                <div v-html="detialMsg.body"></div>
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
        <st-comment
            :bodyTitle="''"
            :summary="''"
        ></st-comment>
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
            oneTitle : '',
            twoTitle : '',
            threeTitle : '',
            bodyTitle : '',
            summary : '',
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
    mounted(){
        this.$refs.breadcrumb.getTree(this.oneTitle,this.twoTitle,this.threeTitle);
    },
    watch: {  
        '$route' (to, from) {  
            console.log(this.$route.query) 
            if(to.fullPath != from.fullPath){
                console.log(to.fullPath,from.fullPath)
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
            this.$get(`/body?id=${id}`)
            .then( res => {
                console.log(res.data)
                this.detialMsg = Object.assign({}, res.data);
                console.log('this.detialMsg====>>>>',this.detialMsg)
                this.oneTitle = '';
                this.twoTitle = '';
                this.threeTitle = '';
                this.wordArr = res.data.relatedBodys;
                this.bodyTitle = res.data.bodyTitle;
                this.summary = res.data.summary;
                console.log(res.data.currentTitles)
                res.data.currentTitles.forEach(function(item,index){
                    switch(index){
                        case 0:
                        this.oneTitle = item;
                        console.log(this.oneTitle)
                        break;
                        case 1:
                        this.twoTitle = item;
                        console.log(this.twoTitle)
                        break;
                        case 2:
                        this.threeTitle = item;
                        console.log(this.threeTitle)
                        break;
                    }
                },this)
                this.$refs.breadcrumb.getTree(this.oneTitle,this.twoTitle,this.threeTitle);
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