<template>
    <div class="login">
        <div class="login-login clearfix">
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
                    <input type="password" placeholder="请输入8-16位密码,仅限字母,数字,下划线" class="boll">
                </h6>
                <h6 class="clearfix">
                    <input type="number" placeholder="收到验证码" class="fl" @click="getMark">
                    <input type="button" placeholder="收到验证码(51)" class="fl">
                </h6>
            </div>
        </div>
        <div class="go-login" @click="login">立即登录</div>
    </div>
</template>
<script>
export default {
    name : 'Login',
    data (){
        return {
        }
    },
    methods : {
        getMark : function(){
            this.$get('/smscode')
                .then(res => {
                    console.log(res)
                })
        },
        login: function() {
          this.$auth('/auth', {username:"admin",password:"admin"})
          .then( res => {
              console.log(res)
              this.$store.dispatch('STORE_TOKEN', res.token)
              this.$router.push({path: '/Test'})
          })  
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

    .login-login{
        margin-top : 42px;
    }

    .login-login-left{
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

    .login-login-right{
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
}
</style>



