<template>
    <div class="cm-comment">
        <p class="userName">{{userName}}</p>
        <p class="commentContent">{{commentContent}}</p>
        <p class="commentDate">{{commentDate | getTimeMD}}</p>
        <cm-foot-nav
            :listArr="listArr"
        ></cm-foot-nav>
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
                    name : '联系我们',
                    path : '',
                    style : {
                        padding : '0 4px',
                        borderRight : '1px solid #eee',
                        height : '12px',
                        lineHeight : '12px',
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
                {
                    name : '友情链接',
                    path : '',
                    style : {
                        padding : '0 4px',
                        borderRight : '1px solid #eee',
                        height : '12px',
                        lineHeight : '12px',
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
                {
                    name : '隐私政策',
                    path : '',
                    style : {
                        padding : '0 4px',
                        borderRight : '1px solid #eee',
                        height : '12px',
                        lineHeight : '12px',
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
                {
                    name : '使用条款',
                    path : '',
                    style : {
                        padding : '0 4px',
                        borderRight : '1px solid #eee',
                        height : '12px',
                        lineHeight : '12px',
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
                {
                    name : '设计师入驻',
                    path : '',
                    style : {
                        padding : '0 4px',
                        borderRight : '1px solid #eee',
                        height : '12px',
                        lineHeight : '12px',
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
            ],
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
        }
    },
    components : {
        CmFootNav,
    },
}
</script>
<style lang="scss" scoped>
.comment{
    width : 100%;
    border-bottom : 1px dashed #ccc;
}
</style>

