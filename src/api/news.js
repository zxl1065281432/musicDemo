import axios from 'axios'

// 获取音乐 url
export const getNews = function (id) {
  return axios({
    url: '/api/nc/article/headline/T1348647853363/0-40.html',
    method: 'GET'
  })
}
