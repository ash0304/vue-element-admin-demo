import request from '@/utils/request'

// 會員管理 - 列表
export function listMemberAsync(data) {
  return request({
    url: '/vue-element-admin/ListMemberAsync',
    method: 'post',
    data
  })
}
