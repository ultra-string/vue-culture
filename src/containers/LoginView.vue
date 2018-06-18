<template>
    <div class="login-view">
        <div class="top">
            <div class="title">
                <p>中华人民共和国文化和旅游部主管 / 中国文化传媒集团主办</p>
            </div>
            <div class="pic">
                <img src="@/common/images/foot/login-logo.jpg" alt="" @click="toIndexfn" class="hand-point">
            </div>
        </div>
        <div class="login">
            <div class="login-button clearfix">
                <div class="login-button-login" :class="curName=='Login'?'curBtnStyle':''" @click="chooseTypeFn('Login')">登 录</div>
                <div class="login-button-register" :class="curName=='Register'?'curBtnStyle':''" @click="chooseTypeFn('Register')">注 册</div>
            </div>
            <router-view></router-view>
        </div>
        <!-- <st-foot-qrcode
        :mark="mark"
        ></st-foot-qrcode> -->
        <st-foot-nav
            style="margin-top:40px;"
        ></st-foot-nav>
    </div>
</template>
<script>
import StFootQrcode from '@/components/sections/st-foot-qrcode';
import StFootNav from '@/components/sections/st-foot-nav';
export default {
    name : 'LoginView',
    data (){
        return {
            // mark : [],
            curName : '',
        }
    },
    components: {
      StFootNav,
      StFootQrcode,
    },
    methods : {
        chooseTypeFn : function(index){
            this.curName = index;
            this.$router.push({name: index});
        },
        toIndexfn : function(){
            this.$router.push({
                path : '/Index'
            })
        }
    },
    created(){
    //   this.$get('/index').then(res => {
    //     //二维码
    //     this.mark = res.data.titleLinkMap[3];
    //   })
        console.log(this.$route.path)
        if(this.$route.path.indexOf('register') != -1){
            this.curName = 'Register';
        }else{
            this.curName = 'Login';
        }
    }
}
</script>
<style lang="scss" scoped>
.login-view{
    min-width : 1000px;

    .top{
        width : 100%;
        border-bottom : 2px solid $color-background;
        margin-bottom : 18px;
        
        .title{
            width : 100%;
            background : $font-hot;

            p{
                width : 1000px;
                height : 40px;
                line-height : 40px;
                color : $font-white;
                margin : 0 auto;
                text-align : left;
                font-family : '楷体'
            }
        }

        .pic{
            width : 1000px;
            margin : 0 auto;
            text-align : center;
            img{
                margin-left : 112px;
            }
        }
    }
    .login{
        width : 1000px;
        min-width : 1000px;
        margin : 0 auto;
        color : $color-login-font;

        .login-button{
            width : 622px;
            padding-left : 378px;

            .login-button-login,.login-button-register{
                width : 147px;
                height : 28px;
                line-height : 28px;
                font-size : 16px;
                text-align : center;
                // border-top : 1px solid $color-login-font;
                // border-left : 1px solid $color-login-font;
                // border-right : 1px solid $color-login-font;
                border-bottom : 1px solid $color-login-font;
                float : left;
            }
            .login-button-login:hover{
                color : #b22f24;
                border-bottom : 1px solid $font-hot;
            }
            .login-button-register:hover{
                color : #b22f24;
                border-bottom : 1px solid $font-hot;
            }
            .login-button-login{
                margin-right : 72px;
            }
            .curBtnStyle{
                color : #b22f24;
                border-bottom : 1px solid $font-hot;
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
}
</style>



