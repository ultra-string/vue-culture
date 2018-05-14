<template>
    <div class="login">
        <div class="login-button clearfix">
            <div class="login-button-login" @click="chooseTypeFn(1)">登 录</div>
            <div class="login-button-register" @click="chooseTypeFn(2)">注 册</div>
        </div>
        <div class="login-login clearfix" v-show="loginType == 1">
            <div class="login-login-left">
                <h6>
                    <span class="star">*</span>
                    用户名:
                </h6>
                <h6>
                    <span class="star">*</span>
                    登录密码:
                </h6>
                <h6>
                    <span class="star">*</span>
                    校验码:
                </h6>
            </div>
            <div class="login-login-right">
                <h6>
                    <input type="text" placeholder="请输入8-16位用户名,仅限字母,数字,下划线" class="boll">
                </h6>
                <h6>
                    <input type="text" placeholder="请输入8-16位密码,仅限字母,数字,下划线" class="boll">
                </h6>
                <h6 class="clearfix">
                    <input type="text" placeholder="收到验证码" class="fl">
                    <input type="button" placeholder="收到验证码(51)" class="fl">
                </h6>
            </div>
        </div>
        <div class="login-register clearfix" v-show="loginType == 2">
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
                    <input type="text" placeholder="请输入手机号" class="boll">
                </h6>
                <h6 class="clearfix">
                    <input type="text" placeholder="收到验证码" class="fl">
                    <input type="button" placeholder="收到验证码(51)" class="fl">
                </h6>
                <h6>
                    <input type="text" placeholder="昵称" class="boll">
                </h6>
                <h6>
                    <input type="text" placeholder="设定登录密码" class="boll">
                </h6>
                <h6>
                    <input type="text" placeholder="再次登录密码" class="boll">
                </h6>
            </div>
        </div>
        <div class="go-login" v-show="loginType == 1">立即登录</div>
        <div class="select" v-show="loginType == 2">
            <p>同意</p>
        </div>
        <div class="submission" v-show="loginType == 2">提交</div>
    </div>
</template>
<script>
export default {
    name : 'login',
    data (){
        return {
            loginType : 1,
        }
    },
    methods : {
        chooseTypeFn : function(index){
            this.loginType = index;
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    width : 1000px;
    min-width : 1000px;
    margin : 0 auto;
    color : $color-login-font;

    .login-button{
        width : 622px;
        padding-left : 378px;

        .login-button-login,.login-button-register{
            width : 146px;
            height : 20px;
            line-height : 20px;
            font-size : 16px;
            text-align : center;
            border-top : 1px solid $color-login-font;
            border-left : 1px solid $color-login-font;
            border-right : 1px solid $color-login-font;
            float : left;
        }
        .login-button-login{
            margin-right : 72px;
        }
    }

    .login-login{
        margin-top : 42px;
    }

    .login-login-left,.login-register-left{
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

    .login-register-right,.login-login-right{
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

    .go-login{
        margin : 0 auto;
        width : 370px;
        height : 38px;
        background : $font-hot;
        color : #fff;
        text-align : center;
        line-height : 38px;
        font-size :18px;
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



