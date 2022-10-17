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
    changeBtnPlay (state, value) {
      state.isBtnPlay = value
    },
    changeBtnPlay (state, value) {
      state.isBtnPlay = value
    },
    changeBtnPlay (state, value) {
      state.isBtnPlay = value
    },
    changeBtnPlay (state, value) {
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
