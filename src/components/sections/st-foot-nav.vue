<template>
    <div class="st-foot-nav">
        <div class="short-line"></div>
        <div class="introduce clearfix">
            <div class="introduce-in-left">
                <div class="introduce-in-left-top clearfix">
                    <span class="contact">CONTACT US</span>
                    <span class="phone-num">400-001-5241</span>
                </div>
                <div class="introduce-in-left-bottom">
                    Copyright © 2013-2017 中传文创投资有限公司版权所有
                </div>
            </div>
            <div class="introduce-in-right">
                <div class="introduce-in-right-top">
                    <cm-foot-nav
                        :listArr = "listArr"
                    ></cm-foot-nav>
                </div>
                <div class="introduce-in-right-bottom clearfix">
                    <span class="white">140217号 </span>
                    <span class="grey head-boder">&nbsp京ICP证</span>
                    <span class="white">11010802016123&nbsp</span>
                    <span class="grey">北京市公安局海淀分局备案编号</span>
                </div>
            </div>
        </div>
        <div class="pic clearfix">
            <img src="@/common/images/foot/trusted-website.jpg" alt="" title="可信网站身份验证">
            <img src="@/common/images/foot/safety-verification.jpg" alt="" title="安全联盟行业验证">
            <img src="@/common/images/foot/record-information.jpg" alt="" title="经营性网站备案信息">
            <img src="@/common/images/foot/alarm-service.jpg" alt="" title="网络110报警服务">
        </div>
    </div>
</template>
<script>
import CmFootNav from '@/components/cm-foot-nav.vue';

export default {
    name : 'stFootNav',
    data(){
        return {
            listArr : [
                {
                    name : '联系我们',
                    path : '/index/AboutUs',
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
                    path : '/index/FriendShipLink',
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
                    name : '公告',
                    path : '/Index/Notice',
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
                    name : '招聘',
                    path : '/Index/Recruit',
                    style : {
                        padding : '0 4px',
                        height : '12px',
                        lineHeight : '12px',
                    },
                    isClick : false,
                    clickClass : '',
                    color : '#eeeeee',
                },
            ],
            listId : '',
        }
    },
    components : {
        CmFootNav
    },
    created () {
        this.listId = new Date().getTime() + '';
    }
}
</script>
<style lang="scss" scoped>
.st-foot-nav{
    width : 968px;
    min-width : 968px;
    height : 147px;
    background : #222;
    margin : 0 auto;
    padding : 12px 16px 5px;
    .short-line{
        width : 22px;
        height : 2px;
        background : #e5cca4;
        border : 1px solid #7f7360;
        margin-bottom : 26px;
    }
    .introduce{
        width : 100%;
        margin-bottom : 16px;

        .introduce-in-left{
            float : left;

            .introduce-in-left-top{
                height : 18px;
                margin-bottom : 24px;

                .contact{
                    float : left;
                    line-height : 18px;
                    font-size : 18px;
                    color : #ead1a7;
                    margin-right : 18px;
                }
                .phone-num{
                    float : left;
                    height : 18px;
                    line-height : 18px;
                    font-size : 18px;
                    color : #fcfcfc;
                }
            }
            .introduce-in-left-bottom{
                height : 12px;
                line-height : 14px;
                color : #a2a2a2;
            }
        }

        .introduce-in-right{
            float : right;
            padding-top : 3px;

            .introduce-in-right-top{
                height : 18px;
                padding-right : 48px;
                font-size : 12px;
                color : #eeeeee;
                margin-bottom : 22px;
            }
            .introduce-in-right-bottom{
                height : 14px;
                span{
                    line-height :14px;
                    font-size : 12px;
                    float : right;
                }
                .grey{
                    color : #838383;
                }
                .white{
                    color : #d5d5d5;
                }
                .head-boder{
                    border-left : 1px solid #838383;
                }
            }
        }
    }
    .pic{
        @include display-flex;
        @include justify-content-space;
        // flex-direction : row;
        width : 565px;
        
    }
}
</style>


