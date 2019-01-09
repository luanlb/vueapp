import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/report/list',
    method: 'get',
    params: query
  })
}

export function fetchReport(id) {
  return request({
    url: '/report/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/report/pv',
    method: 'get',
    params: { pv }
  })
}

export function createReport(data) {
  return request({
    url: '/report/create',
    method: 'post',
    data
  })
}

export function updateReport(data) {
  return request({
    url: '/report/update',
    method: 'post',
    data
  })
}
