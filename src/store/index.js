import { login } from '@/api/login'
import { getLyricsList } from '@/api/music'
import { getItem, setItem } from '@/utils/storage'
import { getNews } from '@/api/news'
import { createStore } from 'vuex'
// 本地 歌曲列表
const LOCALMUSIC = getItem('PLAYLIST')
// 默认歌曲
const DEFALUT_MUSIC = [
  {
    // 歌曲信息
    al: {
      id: 2509498,
      name: 'Animals',
      pic: 109951163215172940,
      picUrl: 'https://p2.music.126.net/DuqxLMfiec2T18GXn1-yVQ==/109951163215172949.jpg',
      pic_str: '109951163215172949',
      tns: []
    },
    // 歌手列表
    ar: [{
      alias: [],
      id: 780003,
      name: 'Martin Garrix',
      tns: []
    }],
    // 歌名
    name: 'Animals',
    // 歌曲id
    id: 26496942
  }
]
export default createStore({
  state: {
    // 歌曲列表
    playList: LOCALMUSIC || DEFALUT_MUSIC,
    // 当前歌曲下标
    curIndex: 0,
    // 按钮是否处于播放
    isBtnPlay: false,
    // 是否显示歌词
    isShowLyrics: false,
    // 当前歌曲播放进度
    currentTime: 0,
    // 当前歌曲的总时长
    curTotalTime: 0,
    // 用户信息
    user: {},
    // 用户喜欢的歌单列表
    usrLoveMusicList: [],
    // 搜索结果显示状态
    isShowResult: false,
    // 歌曲歌词
    lyricList: [],
    // 新闻列表--------------------------------------------
    newsList: getItem('NEWSLSIT') || []
  },
  mutations: {
    // 调用mutations改变仓库store中的isBtnPlay
    changeBtnPlay (state, value) {
      state.isBtnPlay = value
    },
    // 是否显示歌词
    changeShowLyrics (state, value) {
      state.isShowLyrics = value
    },
    // 改变当前播放时间
    changeCurrentTime (state, value) {
      state.currentTime = value
    },
    // 改变总时长
    changeTotalTime (state, value) {
      state.curTotalTime = value
    },
    //  改变vuex中的默认下标
    changeIndex (state, value) {
      state.curIndex = value
    },
    // 将歌单 列表传给vuex中的playList
    changeIt (state, value) {
      state.playList = value
      // 保存playlist到本地
      setItem('PLAYLIST', state.playList)
    },
    // 获取用户喜欢的音乐列表
    getUsrLoveList (state, value) {
      state.usrLoveMusicList = value
    },
    // 添加音乐进入 播放列表
    addMusicInList (state, value) {
      state.playList.push(value)
    },
    // 改变搜索结果显示状态
    changeShowResult (state, value) {
      state.isShowResult = value
    },
    // 获取用户信息
    getUserInfo (state, value) {
      state.user = value
      // 保存 token 到本地
      setItem('_USER_TOKEN', value.token)
      // 保存用户信息到本地
      setItem('USER_PROFILE', value)
    },
    // 获取歌词列表
    getLyricsList (state, value) {
      state.lyricList = value
    },
    // 新闻--------------------------------------
    getNewsList (state, value) {
      state.newsList = value
      setItem('NEWSLSIT', value)
    }
  },
  actions: {
    // 登录
    async login ({ commit }, value) {
      const res = await login(value)
      commit('getUserInfo', res.data)
      return res.data
    },
    // 获取歌词列表
    async getLyricsList ({ commit }, id) {
      const res = await getLyricsList(id)
      commit('getLyricsList', res.data.lrc.lyric)
    },
    // 获取新闻列表--------------------------------------
    async getNewsList ({ commit }) {
      const res = await getNews()
      console.log(res.data.T1348647853363)
      commit('getNewsList', res.data.T1348647853363)
      return res.data.T1348647853363
    }
  }
})
