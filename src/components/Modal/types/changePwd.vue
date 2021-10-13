<template>
  <ModalFrame id="ChangePwd" :show.sync="show" title="修改密码" icon="password">
    <ValidationObserver ref="form" v-slot="{ handleSubmit }" tag="div">
      <ValidationProvider v-slot="{ errors }" rules="required|password" tag="label">
        <h6>原登录密码</h6>
        <el-input
          v-model="Old_Password"
          placeholder="请输入原登录密码"
          type="password"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|password"
        tag="label"
        name="pwd"
      >
        <h6>修改密码</h6>
        <el-input
          v-model="New_Password"
          placeholder="请输入修改密码"
          type="password"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|pwdConfirm:@pwd"
        tag="label"
      >
        <h6>确认密码</h6>
        <el-input
          v-model="Confirm_Pwd"
          placeholder="请确认修改密码"
          type="password"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <div class="modal-btn" @click="handleSubmit(d_submit)">提交</div>
    </ValidationObserver>
  </ModalFrame>
</template>
<script>
import d from '@/utils/debounce'
export default {
  name: 'ChangePwd',
  data() {
    return {
      show: false,
      Old_Password: null,
      New_Password: null,
      Confirm_Pwd: null,
      d_submit: d(this.submit),
    }
  },
  watch: {
    show() {
      this.reset()
    },
  },
  methods: {
    reset() {
      this.Old_Password = null
      this.New_Password = null
      this.Confirm_Pwd = null
      this.$refs.form.reset()
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    },
    submit() {
      this.$notify({
        title: '提示',
        message: '暫時不提供此功能',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
#ChangePwd {
  ::v-deep.box-content {
    padding: 0 30px;
    label {
      > span {
        left: 100px;
        margin-top: 4px;
        margin-bottom: 2px;
      }
      h6 {
        width: 100px;
      }

      .el-input {
        width: calc(100% - 100px);
      }
    }
    .modal-btn {
      margin-top: 15px;
    }
  }
}
</style>
