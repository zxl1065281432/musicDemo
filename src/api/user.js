import axios from '@/utils/request.js'
// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const getUserDetail = function () {
  return axios({
    url: '/user/subcount',
    method: 'GET'
  })
}
// 获取用户播放记录
export const getPlayHistory = function (id) {
  return axios({
    url: `/user/record?uid=${id}&type=1`,
    method: 'GET'
  })
}

// 获取热搜列表
export const getHotList = function () {
  return axios({
    url: '/search/hot/detail',
    method: 'GET'
  })
}
// 获取热门话题
export const getHotDj = function () {
  return axios({
    url: '/dj/hot',
    method: 'GET'
  })
}
