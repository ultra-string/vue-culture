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
          <input type="text" placeholder="请输入8-16位用户名,仅限字母,数字,下划线" class="boll" id="username">
        </h6>
        <h6>
          <input type="password" placeholder="请输入8-16位密码,仅限字母,数字,下划线" class="boll" id="password">
        </h6>
        <h6 class="clearfix">
          <input type="text" placeholder="输入验证码" class="fl getMark" id="picword">
          <img :src="picPath" alt="" class="fl picMark" @click="getPicMark">
          <h5 class="changeMark fr" @click="getPicMark">看不清,换一张</h5>
        </h6>
      </div>
    </div>
    <div class="go-login" @click="login">立即登录</div>
  </div>
</template>
<script>
// baseUrl引入： 
import { baseImgPath } from '@/config/env'
  export default {
    name: 'Login',
    data() {
      return {
        picPath: '',
      }
    },
    methods: {
      login: function () {
        let usernameValue = username.value;  
        let passwordValue = password.value; 
        let picwordValue = picword.value; 
        this.$auth('/auth', {
            username : usernameValue,
            password : passwordValue,
            code : picwordValue
          })
          .then(res => {
            console.log(res)
            this.$store.dispatch('STORE_TOKEN', res.token)
            this.$router.push({
              path: decodeURIComponent(this.$route.query.to),
            })
          })
      },
      //获取图形验证码
      getPicMark: function () {
        this.picPath = baseImgPath + `?time=${new Date().getTime()}`;
        // console.log(this.picPath)
      }
    },
    created() {
      this.getPicMark();
    },
  }

</script>
<style lang="scss" scoped>
  .login {
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
    color: $color-login-font;

    .login-login {
      margin-top: 42px;
    }

    .login-login-left {
      width: 356px;
      text-align: right;
      float: left;
      padding-right: 18px;

      h6 {
        color: $color-login-font-deep;
        font-size: 18px;
        line-height: 38px;
        margin-bottom: 30px;
      }
      .star {
        color: $font-hot;
      }
    }

    .login-login-right {
      float: left;

      h6 {
        height: 40px;
        margin-bottom: 28px;

        input {
          height: 38px;
          border: 1px solid $color-login-font-deep;
        }

        .boll {
          width: 370px;
        }

        .getMark {
          width: 98px;
        }
        .picMark {
          width: 140px;
          height: 40px;
          margin-left: 10px;
        }
        .changeMark {
          width: 118px;
          height: 40px;
          font-size: 14px;
          color: #333333;
          text-align: center;
          line-height: 40px;
        }
      }
    }

    .go-login {
      margin: 0 auto;
      width: 370px;
      height: 38px;
      background: $font-hot;
      color: #fff;
      text-align: center;
      line-height: 38px;
      font-size: 18px;
    }
  }

</style>
