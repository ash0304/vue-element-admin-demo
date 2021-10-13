<template>
  <ModalFrame id="Feedback" :show.sync="show" title="留言反馈" icon="message-1">
    <ValidationObserver ref="form" v-slot="{ handleSubmit }" tag="div">
      <ValidationProvider v-slot="{ errors }" rules="requiredSel" tag="label">
        <h6>反馈类型</h6>
        <el-select ref="select" v-model="FeedbackType" placeholder="请选择类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span>{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" rules="required" tag="label">
        <h6>反馈内容</h6>
        <h6>字元上限<b>500</b>字</h6>
        <el-input
          v-model="Content"
          placeholder="请输入反馈内容"
          maxlength="500"
          rows="8"
          type="textarea"
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
  name: 'Feedback',
  data() {
    return {
      show: false,
      FeedbackType: null,
      Content: null,
      options: [
        { label: '取款问题', value: 2 },
        { label: '游戏问题', value: 3 },
        { label: '优惠问题', value: 4 },
        { label: '网站/APP问题', value: 5 },
        { label: '其他', value: 99 },
      ],
      d_submit: d(this.submit),
    }
  },
  watch: {
    show() {
      this.reset()
    },
  },
  methods: {
    submit() {
      this.show = false
      this.$notify({
        title: '提示',
        message: '您的留言已提交成功',
      })
    },
    reset() {
      this.FeedbackType = null
      this.Content = null
      this.$refs.form.reset()
      // 重抓select dropdown 的宽度
      setTimeout(this.$refs.select.resetInputWidth, 500)
    },
  },
}
</script>
<style lang="scss" scoped>
#Feedback {
  span {
    margin-top: 4px;
    margin-bottom: 2px;
  }
  ::v-deep textarea {
    margin-top: 10px;
  }
  label:nth-child(2) {
    justify-content: space-between;
    > h6 {
      &:nth-child(2) {
        padding: 0;
        width: auto;
        font-size: 12px;
        color: #7ea3dd;
        font-weight: normal;
        > b {
          color: red;
          padding: 0 5px;
        }
      }
    }
    > span {
      width: 100%;
      left: 0;
    }
  }
  .modal-btn {
    margin-top: 15px;
  }
}
</style>
