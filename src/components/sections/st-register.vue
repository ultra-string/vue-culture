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
                    <input type="text" placeholder="请输入手机号" @keyup="log" v-model="mobile" class="boll" id="login_mobile">
                </h6>
                <h6 class="clearfix">
                    <input type="number" placeholder="请输入验证码" class="fl" id="note">
                    <input type="button" value="收到验证码" class="fr ms-code-btn" v-show="beReady" @click="getSmsCodeFn">
                    <input type="button" value="收到验证码(60)" class="fr ms-code-btn" id="noteCode" v-show="!beReady">
                </h6>
                <h6>
                    <input type="text" placeholder="昵称" id="nickname" class="boll">
                </h6>
                <h6>
                    <input type="password" placeholder="设定登录密码" id="password" class="boll">
                </h6>
                <h6>
                    <input type="password" placeholder="再次登录密码" id="passwordagin" class="boll">
                </h6>
            </div>
        </div>
        <!-- <div class="select">
            <p>同意</p>
        </div> -->
        <div class="submission">提交</div>
    </div>
</template>
<script>
import Lib from '@/common/lib/lib.js'
export default {
    name : 'Register',
    data (){
        return {
            mobile : '',
            password : '',
            nickname : '',
            smscode : '',
            countTime : 60,
            beReady : true,
            MSG_text : '',//错误异常信息
            timer : '',//定时器
        }
    },
    methods : {
        log : function(){
            this.mobile = this.mobile.replace(/[^\d]/g,'');
        },
        //获取短信验证码
        getSmsCodeFn : function(){
            let mobile = login_mobile.value;
            if (this.mobile == '') {
                this.MSG_text = "请输入手机号";
                alert(this.MSG_text)
				login_mobile.focus();
				this.beReady = true;
				this.timer && clearInterval(this.timer);
				return;
			}
            if (!(/^1[3|4|5|7|8]\d{9}$/.test(mobile))) {
				login_mobile.focus();
                this.MSG_text = "手机号码有误";
                alert(this.MSG_text)
				this.beReady = true;
				this.timer && clearInterval(this.timer);
				return;
            }
            console.log('dfdf')
            this.$get('/smscode?phone='+mobile).then(res => {
                console.log(res)
                //  验证码倒计时
                if(res.code != '111111'){
                    this.beReady = false;
                    let _this = this;
                    this.timer = setInterval(function() {
                        if (_this.countTime == 0) {
                            _this.countTime = 60;
                            _this.beReady = true;
                            let date = new Date().getTime();
                            // alert('验证码已过期，请重新输入');
                            clearInterval(_this.timer);
                        }
                        _this.countTime--;
                        noteCode.value = '收到验证码(' + _this.countTime + ')';
                    }, 1000);
                }else{
                    alert(res.msg)
                }
            })
        },
        //注册
        registerFn : function(){
            let safeCode = note.value;
            if (safeCode == '') {
                this.MSG_text = "请输入验证码";
                alert(this.MSG_text)
				this.beReady = true;
				this.countTime = 60;
				note.focus();
				this.timer && clearInterval(this.timer);
				return;
            }
            //两次密码不一致
            if(password.value != passwordagin.value){
                alert('两次密码不一致')
                return;
            }

            this.nickname = nickname.value;
            this.password = password.value;
            this.smscode = note.value;


            this.$post('/register' , {
                "nickname": this.nickname,
                "password": this.password,
                "phone": this.mobile,
                "smscode": this.smscode
            }).then(res => {
                console.log(res);
                this.$router.push({
                    path: decodeURIComponent(this.$route.query.to),
                })
            })
        },
    },
    created(){
        
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

            .ms-code-btn{
                width : 156px;
                text-align : center;
                line-height : 38px;
                color : $color-login-font-deep;
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



