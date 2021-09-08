import request from '@/utils/request'

export function listAsync() {
  return request({
    url: '/vue-element-admin/ListAsync',
    method: 'post'
  })
}
