import axios from '@/utils/request.js'
// 获取轮播图
export const getBannerList = function () {
  return axios({
    url: '/banner',
    method: 'GET'
  })
}
// 获取推荐歌单
export const getRecommendMusicPic = function () {
  return axios({
    url: '/personalized?limit=30',
    method: 'GET'
  })
}
// 获取歌单详情
export const getPlayList = function (data) {
  return axios({
    url: `/playlist/detail?id=${data}`,
    method: 'get'
  })
}

// 获取歌单所有歌曲
export const getAllMusic = function (data) {
  return axios({
    url: `/playlist/track/all?id=${data}&limit=30&offset=0`,
    method: 'get'
  })
}
