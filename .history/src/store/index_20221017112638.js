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
    changeBtnPlay (state, value) {
      state.isBtnPlay = value
    },
    changeShowLyrics (state, value) {
      state.isBtnPlay = value
    },
    changeCurrentTime (state, value) {
      state.isBtnPlay = value
    },
    changeTotalTime (state, value) {
      state.isBtnPlay = value
    },
    //  改变vuex中的默认下标
    changeIndex (state, value) {
      state.isBtnPlay = value
    },
    // 将歌单 列表传给vuex中的playList
    changeIt (state, value) {
      state.isBtnPlay = value
    },
    getUsrLoveList (state, value) {
      state.isBtnPlay = value
    },
    addMusicInList (state, value) {
      state.isBtnPlay = value
    },
    changeShowResult (state, value) {
      state.isBtnPlay = value
    }
  },
  actions: {

  }
})
