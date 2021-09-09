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

export function listAgentCommisiionAsync(data) {
  return request({
    url: '/vue-element-admin/ListAgentCommissionAsync',
    method: 'post',
    data
  })
}

export function receiveAgentCommissionAsync(data) {
  return request({
    url: '/vue-element-admin/ReceiveAgentCommissionAsync',
    method: 'post',
    data
  })
}

export function tradeHistoryListAsync(data) {
  return request({
    url: '/vue-element-admin/TradeHistoryListAsync',
    method: 'post',
    data
  })
}
