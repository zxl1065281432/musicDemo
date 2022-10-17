import axios from '@/utils/request.js'
// 登录
export const login = function (data) {
  return axios({
    url: `/login/cellphone?phone=${data.phone}&password=${data.password}`,
    method: 'GET'
  })
}
