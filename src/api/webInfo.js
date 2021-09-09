import request from '@/utils/request'

export function getHomeReportAsync() {
  return request({
    url: '/vue-element-admin/GetHomeReportAsync',
    method: 'post'
  })
}
