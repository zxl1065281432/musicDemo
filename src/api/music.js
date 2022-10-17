import axios from '@/utils/request.js'

// 获取音乐 url
export const getBannerList = function (id) {
  return axios({
    url: `/song/url?id=${id}`,
    method: 'GET'
  })
}
// 获取歌词
export const getLyricsList = function (id) {
  return axios({
    url: `/lyric?id=${id}`,
    method: 'GET'
  })
}
// 喜欢音乐
export const likeMusic = function (id) {
  return axios({
    url: `/like?id=${id}`,
    method: 'GET'
  })
}
// 喜欢音乐列表
export const getLikeList = function (userId) {
  return axios({
    url: `/likelist?uid=${userId}`,
    method: 'GET'
  })
}
