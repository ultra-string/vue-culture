<template>
    <div class="register">
        <div class="login-register clearfix">
            <div class="register-discription">
                <h5 class="register-discription-top">使用手机号注册</h5>
                <h5>欢迎来到中国手艺网！请完善你的信息</h5>
            </div>
            <div class="login-register-left">
                <h6>
                    <span class="star">*</span>
                    手机号:
                </h6>
                <h6>
                    <span class="star">*</span>
                    手机验证码:
                </h6>
                <h6>
                    <span class="star">*</span>
                    昵称:
                </h6>
                <h6>
                    <span class="star">*</span>
                    密码:
                </h6>
                <h6>
                    <span class="star">*</span>
                    确认密码:
                </h6>
            </div>
            <div class="login-register-right">
                <h6>
                    <input type="text" placeholder="请输入手机号" @keyup="log" v-model="phoneNum" class="boll">
                </h6>
                <h6 class="clearfix">
                    <input type="number" placeholder="收到验证码" class="fl">
                    <input type="button" placeholder="收到验证码(51)" class="fl">
                </h6>
                <h6>
                    <input type="text" placeholder="昵称" class="boll">
                </h6>
                <h6>
                    <input type="password" placeholder="设定登录密码" class="boll">
                </h6>
                <h6>
                    <input type="password" placeholder="再次登录密码" class="boll">
                </h6>
            </div>
        </div>
        <div class="select">
            <p>同意</p>
        </div>
        <div class="submission">提交</div>
    </div>
</template>
<script>
import Lib from '@/common/lib/lib.js'
export default {
    name : 'Register',
    data (){
        return {
            phoneNum : '',
        }
    },
    methods : {
        log : function(){
            this.phoneNum = this.phoneNum.replace(/[^\d]/g,'');
            console.log(this.phoneNum)
        },
    }
}
</script>
<style lang="scss" scoped>
.register{
    width : 1000px;
    min-width : 1000px;
    margin : 0 auto;
    color : $color-login-font;

    .login-register-left{
        width : 356px;
        text-align : right;
        float : left;
        padding-right : 18px;

        h6{
            color : $color-login-font-deep;
            font-size : 18px;
            line-height : 38px;
            margin-bottom : 30px;
        }
        .star{
            color : $font-hot;
        }
    }

    .login-register-right{
        float : left;

        h6{
            height : 40px;
            margin-bottom : 28px;

            input{
                height : 38px;
                border : 1px solid $color-login-font-deep;
            }

            .boll{
                width : 370px;
            }
        }
    }

    .login-register{
        margin-top : 30px;

        .register-discription{
            text-align : center;
            margin-bottom : 28px;
            color : $color-login-font-deep;

            h5{
                font-size : 18px;
                height : 18px;
                line-height : 18px;
            }
            
            .register-discription-top{
                margin-bottom : 34px;
            }
        }
    }

    .submission{
        width : 138px;
        height : 32px;
        border : 1px solid $color-login-font;
        border-radius : 5px;
        line-height : 32px;
        text-align : center;
        margin : 0 auto;
    }
}
</style>



