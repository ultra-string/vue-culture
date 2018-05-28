<template>
    <div class="cm-comment" ref="comment">
        <p class="userName">{{userName}}</p>
        <p class="commentContent">{{commentContent}}</p>
        <div class="foot-fn clearfix">
            <p class="commentDate fl">{{commentDate | getTimeMD}}</p>
            <cm-foot-nav
                class="fr"
                :listArr="listArr"
                
            ></cm-foot-nav>
        </div>
    </div>
</template>
<script>
import CmFootNav from '@/components/cm-foot-nav';

export default{
    name : "CmComment",
    data(){
        return {
            listArr : [
                {
                    name : '转发',
                    path : '',
                    style : {
                        padding : '0 4px',
                        borderRight : '1px solid #99c9e2',
                        fontSize : '14px',
                        height : '14px',
                        lineHeight : '14px',
                        marginTop : '6px',
                        color : '#99c9e2'
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
                {
                    name : '收藏',
                    path : '',
                    style : {
                        padding : '0 4px',
                        borderRight : '1px solid #99c9e2',
                        fontSize : '14px',
                        height : '14px',
                        lineHeight : '14px',
                        marginTop : '6px',
                        color : '#99c9e2'
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
                {
                    name : '评论',
                    path : '',
                    style : {
                        padding : '0 4px',
                        fontSize : '14px',
                        height : '14px',
                        lineHeight : '14px',
                        marginTop : '6px',
                        color : '#99c9e2'
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
                
            ],
            pageNo : '1',
            pageSize : '1',
            comment : 'sdfsfd',
            bodyId :'12',
            id : '1'
        }
    },
    props : {
        userName : {
            type : String,
            default : '用户昵称'
        },
        commentContent : {
            type : String,
            default : '输入评论输入评论输入评论输入评论输入评论输入评论输入评论输入评论！！！！'
        },
        commentDate : {
            type : String,
            default : '1526460237434'
        },
        isGoodNav : {
            type : Boolean,
            default : false
        },
        lastBorder : {
            type : Boolean,
            default : false
        }
    },
    components : {
        CmFootNav,
    },
    mounted (){
        //查询
        // var str = '/commentSearch&' + this.pageNo + '&' + this.pageSize
        // this.$post(str).then(res => {
        //     console.log(res)
        // })
        //发布
        // var str = '/commentPublish&' + this.comment + '&' + this.bodyId;
        // this.$post(str).then(res => {
        //     console.log(res)
        // })
        //删除  
        // var str = '/commentDelete&' + this.id;
        // this.$post(str).then(res => {
        //     console.log(res)
        // })
        //获取登录信息
        this.$get('/user').then(res => {
            console.log(res);
        })
        if(this.lastBorder){
            this.$refs.comment.style.borderBottom = "none";
        }
    }
}
</script>
<style lang="scss" scoped>
.cm-comment{
    width : 100%;
    margin : 0 auto;
    border-bottom : 1px dashed #acacac;
    padding-top : 24px;
    text-align : left;
    
    .userName{
        width : 100%;
        color : #c26b65;
        font-size : 16px;
        line-height : 32px;
        height : 32px;
        margin-bottom : 6px;
    }

    .commentContent{
        width : 100%;
        line-height : 20px;
        color : #959595;
        font-size : 14px;
        margin-bottom : 6px;
    }

    .foot-fn{
        width : 100%;
        height : 20px;
        line-height : 20px;
        color : #959595;
        font-size : 12px;
        margin-bottom : 10px;
    }
}
</style>

