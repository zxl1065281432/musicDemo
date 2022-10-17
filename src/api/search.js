
import axios from '@/utils/request.js'

// 搜索歌曲
export const getSearchMusic = function (keyword) {
  return axios({
    url: `/cloudsearch?keywords=${keyword}`,
    method: 'GET'
  })
}
