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
    changeIndex (state, value) {
      state.isBtnPlay = value
    },
    changeIt (state, value) {
      state.isBtnPlay = value
    },
    getUsrLoveList (state, value) {
      state.isBtnPlay = value
    },
    changeBtnPlay (state, value) {
      state.isBtnPlay = value
    },
    changeBtnPlay (state, value) {
      state.isBtnPlay = value
    }
  },
  actions: {

  }
})
