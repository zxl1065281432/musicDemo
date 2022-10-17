import { getItem } from '@/utils/storage'
import { createStore } from 'vuex'
const LOCALMUSIC = getItem('PLAYLIST')
const DEFALUT_MUSIC = [
  {
    al: {id: 2509498, name: "Animals",
    }
id
: 
2509498
name
: 
"Animals"
pic
: 
109951163215172940
picUrl
: 
"https://p2.music.126.net/DuqxLMfiec2T18GXn1-yVQ==/109951163215172949.jpg"
pic_str
: 
"109951163215172949"
tns
: 
[]
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
    isShowResult: false

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
    }
  },
  actions: {

  }
})
