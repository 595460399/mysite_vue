import request from './index'
const PATH1 = '/articles'
const PATH2 = '/article'
function getList(params) {
  return request({
    url: `${PATH1}`,
    method: 'get',
    params
  })
}

function getInfo(params) {
  return request({
    url: `${PATH2}`,
    method: 'GET',
    params
  })
}

export default {
  getList,
  getInfo
}
