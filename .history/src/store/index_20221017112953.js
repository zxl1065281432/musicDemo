import { createStore } from 'vuex'

export default createStore({
  state: {
    playList: [],
    curIndex: 0,
    isBtnPlay: false,
    isShowLyrics: false,
    currentTime: 0,
    curTotalTime: 0,
    user: {},
    usrLoveMusicList: [],
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
    changeShowResult (state, value) {
      state.isBtnPlay = value
    }
  },
  actions: {

  }
})
