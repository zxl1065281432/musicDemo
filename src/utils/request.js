import axios from 'axios'

const request = axios.create({
  baseURL: 'http://39.107.86.175:3333'
  // timeout: 2000
})
// // 请求拦截器
// request.interceptors.request.use(function (conf) {
//   return conf
// },
// function (error) {
//   return Promise.reject(error)
// })
// // 响应拦截器
// request.interceptors.response.use(function (conf) {
//   return conf
// }, function (error) {
//   return Promise.reject(error)
// })

export default request
