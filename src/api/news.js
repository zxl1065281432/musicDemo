import axios from 'axios'

// 获取音乐 url
export const getNews = function (id) {
  return axios({
    // url: '/api/nc/article/headline/T1348647853363/0-40.html',
    url: 'http://39.107.86.175:3600/news',
    method: 'GET'
  })
}
