import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, integer, between, min_value } from 'vee-validate/dist/rules'

extend('email', {
  validate: value => {
    const regex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
    return regex.test(value)
  },
  message: '请输入正确邮箱'
})
extend('required', { ...required, message: '必填' })
extend('requiredSel', { ...required, message: '必选' })
extend('account', {
  validate: value => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,12}$/
    return regex.test(value)
  },
  message: '6-12个字符，须为数字和英文混合'
})
extend('password', {
  validate: value => {
    const regex = /^[0-9a-zA-Z]{6,12}$/
    return regex.test(value)
  },
  message: '6-12个字符，须为数字或英文混合'
})
extend('pwdConfirm', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: '两次输入的密码必须一致'
})
extend('name', {
  validate: value => {
    const regex = /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/
    return regex.test(value)
  },
  message: '真实姓名不符合格式'
})
extend('phone', {
  validate: value => {
    const regex = /^[0-9]{11,11}$/
    return regex.test(value)
  },
  message: '手机号码格式错误'
})
extend('agent', {
  validate: value => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,7}$/
    return regex.test(value)
  },
  message: '代理码错误'
})
extend('qq', {
  validate: value => {
    const regex = /^[0-9]{5,13}$/
    return regex.test(value)
  },
  message: '请输入正确QQ号'
})
extend('wechat', {
  validate: value => {
    const regex = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
    return regex.test(value)
  },
  message: '请输入正确微信号'
})
extend('chinese', {
  validate: value => {
    const regex = /^[\u4E00-\u9FA5]+(·[\u4E00-\u9FA5]+)*$/
    return regex.test(value)
  },
  message: '仅限定输入中文'
})
extend('card', {
  validate: value => {
    const regex = /^[0-9]{13,19}$/
    return regex.test(value)
  },
  message: '支付账号格式不符'
})
extend('integer', {
  ...integer,
  message: '请输入整数金额'
})
extend('between', {
  ...between,
  message: '输入金额已超出上下限'
})
extend('min_value', {
  ...min_value,
  message: '输入金额已低于下限'
})

const addInputHint = { extends: ValidationProvider, watch: { 'classes.invalid'(ni) {
  const target = this.$el.querySelector('input,textarea')
  if (!target) return
  if (ni) target.classList.add('invalid')
  else target.classList.remove('invalid')
} }}

const veeValidate = {
  install(Vue) {
    Vue.component('ValidationProvider', addInputHint)
    Vue.component('ValidationObserver', ValidationObserver)
  }
}
export default veeValidate
