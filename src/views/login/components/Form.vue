<template>
  <div class="entrance">
    <div class="entrance-frame entrance-top" />
    <div class="entrance-content">
      <div>
        <div class="entrance-title">
          <span>//</span>
          <span class="main-text">登录</span>
          <span>//</span>
        </div>
        <ValidationObserver
          ref="loginForm"
          v-slot="{ handleSubmit }"
          tag="div"
          class="form"
        >
          <ValidationProvider v-slot="{ errors }" class="form-input-row" rules="required" tag="div">
            <input
              v-model="loginForm.username"
              type="text"
              placeholder="请输入账号"
              @keydown.enter="handleSubmit(d_login)"
            >
            <span class="input-tip">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" class="form-input-row" rules="required" tag="div">
            <input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
              maxlength="12"
              @keydown.enter="handleSubmit(d_login)"
            >
            <span class="input-tip">{{ errors[0] }}</span>
          </ValidationProvider>
          <div class="remember-row">
            <el-checkbox v-model="isRemember">
              <span class="remember pointer"> 记住账号 </span>
            </el-checkbox>
          </div>
          <div class="login-btn" @click="handleSubmit(d_login)">
            <span>登</span>&nbsp;
            <span>录</span>
          </div>
        </ValidationObserver>
      </div>
    </div>
    <div class="entrance-frame entrance-bottom" />
  </div>
</template>
<script>
import d from '@/utils/debounce'
// import { getCapture } from '@/utils/verifyKey'
// import { getVerifyData } from '@/api/VerifyCode'
// import { registerSendCellPhoneVerifyCode, register } from '../../../api/agent'
// import { mapGetters } from 'vuex'

export default {
  name: 'Form',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111',
      },
      isRemember: true,
      agree: false,
      d_login: d(this.login),
    }
  },
  created() {
  },
  methods: {
    login() {
      this.loading = true
      this.$store.dispatch('user/login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.entrance {
  position: relative;
  width: 468px;
  z-index: 20;
  .entrance-frame {
    width: 468px;
    height: 40px;
  }
  .entrance-top {
    background: url('../../../assets/login/box_entrance_top.png');
  }
  .entrance-content {
    width: 468px;
    background: url('../../../assets/login/box_entrance_bg.png');
    ::v-deep.entrance-title {
      text-align: center;
      span:first-child,
      span:last-child {
        color: #83a9e7;
        font-size: 24px;
        margin: 0 15px;
      }
      .main-text {
        font-size: 30px;
        font-weight: bold;
        background: -webkit-linear-gradient(#001f66, #2a62d5),
          -webkit-linear-gradient(#001f66, #001f66);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0.3px #bfd2ff;
      }
    }
    ::v-deep.form {
      padding: 38px 45px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .getCode {
        color: #3079ff;
        font-size: 14px;
        position: absolute;
        right: 60px;
        cursor: pointer;
        transform: translateY(8px);
        &.disableSend {
          color: #c0c4cc;
          pointer-events: none;
        }
      }
      .verifyCodeImg {
        width: 25%;
        position: absolute;
        right: 50px;
        transform: translateY(4px);
        cursor: pointer;
        mix-blend-mode: multiply;
      }
      input {
        width: 100%;
        height: 36px;
        line-height: 36px;
        box-shadow: inset 0px 1px 3.2px 0.8px #a2b7d9;
        background-color: #ecf4ff;
        border: 1px solid transparent;
        transition: border-color 0.6s;
        border-radius: 5px;
        color: #6e81ab;
        padding-left: 15px;
        &::placeholder {
          color: #6e81ab;
          font-size: 14px;
        }
        &.invalid {
          border-color: red;
        }
      }
      .input-tip {
        color: #7ea3dd;
        font-size: 14px;
        position: absolute;
        left: 15px;
        bottom: -22px;
      }
      .remember-row {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin-bottom: 30px;
        .remember {
          color: #7ea3dd;
        }
        .forget {
          color: #3079ff;
        }
        label {
          margin-bottom: 0;
          ::v-deep.el-checkbox__label {
            line-height: 22px;
          }
        }
        ::v-deep.el-checkbox__inner {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          box-shadow: 1px 1.7px 4px 0 rgba(0, 17, 123, 0.3);
          &::after {
            left: 6px;
            width: 5px;
            height: 10px;
            border-right: 2px solid #fff;
            border-top: none;
            border-left: none;
            border-bottom: 2px solid #fff;
          }
        }
      }
      .login-btn {
        margin-bottom: 30px;
        cursor: pointer;
        color: #fff;
        font-size: 18px;
        border-radius: 5px;
        text-align: center;
        width: 100%;
        height: 44px;
        line-height: 44px;
        box-shadow: 1px 1.7px 4px 0 rgba(0, 17, 123, 0.3);
        background-image: linear-gradient(to top, #2f77fc, #78a8ff);
      }
      .bottom-line {
        text-align: center;
        color: #7ea3dd;
        font-size: 14px;
        .register {
          color: #3079ff;
        }
      }
      .form-input-row {
        position: relative;
        margin: 0px 0px 30px;
        &:last-child {
          margin: 0px;
        }
      }
      .v5-btn-container {
        width: 378px;
        height: 44px;
        margin-bottom: 30px;
        > div {
          margin: 0;
        }
      }
    }
  }
  .entrance-bottom {
    background: url('../../../assets/login/box_entrance_bottom.png');
  }
}
</style>
