<template>
    <div class="st-comment">
        <div class="choose-content clearfix">
            <ul class="fl left-content clearfix">
                <li class="clearfix"><i>阅读&nbsp({{}})&nbsp</i><span></span></li>
                <li class="clearfix"><i>评论&nbsp({{}})&nbsp</i><span></span></li>
                <li class="clearfix"><i>收藏&nbsp({{}})&nbsp</i><span></span></li>
                <li class="clearfix"><i>转载&nbsp({{}})&nbsp</i></li>
            </ul>
        </div>
        <div class="content">
            <div class="text-content">
                <div class="text-content-title">
                    <p>评论</p>
                </div>
                <textarea class="text-content-box" placeholder="请输入评论...."  name="" id="" cols="30" rows="10"></textarea>
                <div class="text-content-btn clearfix">
                    <div class="post-btn fr">发布</div>
                    <div class="login-nav fr clearfix">
                        <span class="login-btn fl">登录</span>
                        <i class="fl"></i>
                        <span class="login-btn fl">注册</span>
                    </div>
                </div>
            </div>
            <div class="show-content-title">
                <div class="show-content-in clearfix">
                    <p class="fl show-content-in-name">最新评论</p>
                    <p class="fr show-content-in-prompt">重要提示：警惕虚假信息</p>
                </div>
            </div>
            <div class="cm-box-comment">
                <cm-comment
                    :userName="item.userName"
                    :commentContent="item.commentContent"
                    :commentDate="item.commentDate"
                    v-for="(item , k) in commentData"
                    :key = 'k'
                    :lastBorder="k==commentData.length-1?true:false"
                ></cm-comment>
            </div>
            <cm-change-page></cm-change-page>
        </div>
    </div>
</template>
<script>
import CmComment from '@/components/cm-comment';
import CmChangePage from '@/components/cm-change-page';

export default{
    name : 'StComment',
    data (){
        return {
            commentData : [],
        }
    },
    components : {
        CmComment,
        CmChangePage,
    },
    created(){
        this.commentData = [
            {
                userName : 'fk',
                commentContent : '熟练度附近抗裂砂浆的方式来拉克砂浆的方式来拉克砂浆的方式来拉克砂浆的方式来拉克砂浆的方式来拉克砂浆的方式来拉克丝接待来访善良大方加适量的解放路上地方吉林省空间大发牢骚发',
                commentDate : '1526460237434',
                // isGoodNav : false,
            },
            {
                userName : 'fklslsl',
                commentContent : '熟练度附近抗裂砂浆的方式来拉克丝接待来访善良大方加适量的解放路上地方吉林省空间大发牢骚发',
                commentDate : '1526460247434',
                // isGoodNav : false,
            },
        ];
    }
}
</script>
<style lang="scss" scoped>
.st-comment{
    width : 100%;
    margin : 66px auto 0;
    /* border-top : 2px solid #f4f3f1; */

    .choose-content{
        height : 58px;
        line-height :58px;
        margin-bottom : 18px;

        .left-content{
            li,span,i{
                float : left;
            }

            i{
                font-size : 16px;
                color : #959595;
                height : 58px;
                line-height : 58px;
            }

            span{
                background : #959595;
                width : 2px;
                height : 18px;
                margin : 22px 10px 0;
            }

            li{
                height : 58px;
            }
        }
    }

    .text-content{
        width : 100%;

        .text-content-title{
            width :100%;
            background : #f4f3f1;
            margin-bottom : 24px;

            p{
                padding-left : 16px;
                height : 30px;
                line-height :30px;
                color : #4e4e4e;
                font-size : 16px;
                font-weight : bold;
            }
        }
        
        .text-content-box{
            width : calc(100% - (20px + 44px));
            width : -moz-calc(100% - (20px + 44px));
	        width : -webkit-calc(100% - (20px + 44px));
            height : 148px;
            border : 1px solid #e5e5e5;
            padding : 16px 10px;
            margin : 0 auto;
            font-size : 14px;
            line-height : 20px;
            display : block;
        }

        .text-content-btn{
            padding-right :24px;
            height : 80px;

            .post-btn{
                width : 84px;
                height :24px;
                margin-top : 28px;
                border-radius : 3px;
                background : $font-hot;
                color : $font-white;
                text-align : center;
            }
            .login-nav{
                line-height :80px;
                height : 80px;
                margin-right : 30px;

                i{
                    width : 2px;
                    height : 14px;
                    margin : 33px 10px 0;
                    background : #7d7d7d;
                }

                .login-btn{
                    font-size : 14px;
                    color :#7d7d7d;
                }
            }
        }
    }
    .content{
        width : 100%;
        border : 1px solid #e5e5e5;
        background : #fcfcfb;
    }
    .show-content-title{
        width : 100%;
        height : 48px;
        background : #f4f3f1;

        .show-content-in-name{
            padding-left : 16px;
            font-size : 16px;
            line-height : 48px;
            font-weight : bold;
            color : #000;
        }

        .show-content-in-prompt{
            padding-right : 20px;
            font-size : 14px;
            line-height : 48px;
            color : #595959;
        }
    }
    .cm-box-comment{
        padding :0 22px;
    }
}
</style>


