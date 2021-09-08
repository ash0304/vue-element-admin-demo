import request from '@/utils/request'

export function listAsync() {
  return request({
    url: '/vue-element-admin/ListAsync',
    method: 'post'
  })
}

// 下線代理查詢
export function listAgentAsync(data) {
  return request({
    url: '/vue-element-admin/ListAgentAsync',
    method: 'post',
    data
  })
}
