<template>
  <ModalFrame :show.sync="show" title="取款" icon="Withdrawal">
    <ValidationObserver ref="form" v-slot="{ handleSubmit }" tag="div">
      <ValidationProvider v-if="ValidBankPassword === 1" v-slot="{ errors }" rules="required" tag="label">
        <h6>取款密码</h6>
        <el-input v-model="input1" placeholder="请输入取款密码" type="password">
          <!-- <Eye slot="suffix" /> -->
        </el-input>
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider v-if="length > 0" v-slot="{ errors }" rules="required" tag="label">
        <h6>银行卡</h6>
        <el-select ref="select" v-model="input2" placeholder="请选择银行卡">
          <el-option
            v-for="item in cards"
            :key="item.value"
            :label="item.showLabel"
            :value="item.value"
          />
        </el-select>
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <label v-else>
        <h6>银行卡</h6>
        <div class="toBindCard" @click="directToBankCard">请先添加银行卡哦!</div>
        <span />
      </label>
      <ValidationProvider
        v-slot="{ errors }"
        :rules="`required|integer|between: ${123}, ${wallet}`"
        tag="label"
      >
        <h6>取款金额</h6>
        <el-input
          v-model="input3"
          placeholder="请输入取款金额"
          type="text"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <ol>
        <span>温馨提示：</span>
        <li>取款不得低于 <b>{{ 123 }}</b> 元</li>
        <li>提交后须经由财务审核，若长期未审核请联系客服。</li>
      </ol>
      <div class="modal-btn" @click="handleSubmit(d_addAgentWithdrawAsync)">提交</div>
    </ValidationObserver>
  </ModalFrame>
</template>
<script>
// import { mapGetters } from 'vuex'
import d from '@/utils/debounce'

export default {
  name: 'Withdraw',
  data() {
    return {
      wallet: 0,
      show: false,
      input1: null,
      input2: null,
      input3: null,
      cards: [],
      ValidBankPassword: 1,
      length: 1,
      d_addAgentWithdrawAsync: d(this.addAgentWithdrawAsync)
    }
  },
  // computed: {
  //   ...mapGetters(['withdrawUpperLimit'])
  // },
  watch: {
    show(ni) {
      if (ni) {
        this.getLatestWallet()
        this.getCards()
        this.reset()
      }
    },
  },
  methods: {
    addAgentWithdrawAsync() {
      this.$notify({
        title: '提示',
        message: '暫時不提供此功能',
      })
    },
    directToBankCard() {
      this.show = false
      this.$router.push({ name: 'UserInfo' })
    },
    getLatestWallet() {
      this.$store.dispatch('user/getAgentWithdrawPoint').then((response) => {
        const { Data } = response
        this.wallet = Data.WithdrawPoint
        this.ValidBankPassword = Data.ValidBankPassword
      })
    },
    reset() {
      this.input1 = null
      this.input2 = null
      this.input3 = null
      this.$refs.form.reset()
      // 重抓select dropdown 的宽度
      setTimeout(this.$refs.select.resetInputWidth, 500)
    },
  },
}
</script>
<style lang="scss" scoped>
span {
  margin-top: 4px;
  margin-bottom: 2px;
}
ol {
  font-size: 12px;
  color: #7ea3dd;
  line-height: 16px;
  padding-left: 16px;
  padding-bottom: 40px;
  margin-top: 10px;
  b {
    color: red;
    font-weight: normal;
  }
  span {
    margin-left: -16px;
  }
}
.toBindCard {
  height: 50px;
  line-height: 50px;
  color: #2d82ff;
  cursor: pointer;
}
</style>
