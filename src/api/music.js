import axios from '@/utils/request.js'

// 获取音乐 url
export const getBannerList = function (id) {
  return axios({
    url: `/song/url?id=${id}`,
    method: 'GET'
  })
}
// 获取歌曲mv
export const getMv = function (id) {
  return axios({
    url: `/mv/url?id=${id}`,
    method: 'GET'
  })
}
// 获取mv评论
export const getMvComments = function (id) {
  return axios({
    url: `/comment/mv?id=${id}`,
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

// 获取歌词评论
export const getComment = function (id, num = 1) {
  return axios({
    url: `/comment/music?id=${id}&limit=20&offset=${num}`,
    method: 'GET'
  })
}
