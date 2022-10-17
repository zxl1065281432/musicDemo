<template>
  <div class="changePayBack">
    <!-- 切换播放方式 -->
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-BAI-xunhuan"></use>
    </svg>
    <svg class="icon" aria-hidden="true" @click="changeMusic(-1)">
      <use xlink:href="#icon-shangyishoushangyige"></use>
    </svg>
      <!-- 开始播放 -->
    <svg class="bofang_o" aria-hidden="true" @click="play" v-if="!isBtnPlay">
      <use xlink:href="#icon-bofang_o"></use>
    </svg>
      <!-- 暂停按钮 -->
    <svg class="zanting_0" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-zanting_o"></use>
    </svg>
    <svg class="icon" aria-hidden="true" @click="changeMusic(1)">
      <use xlink:href="#icon-xiayigexiayishou"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-caidan1"></use>
    </svg>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  inject: ['play'],
  methods: {
    ...mapMutations(['changeIndex', 'changeBtnPlay']),
    // 切换音乐 上一首 下一首
    changeMusic (index) {
      // if (this.playList.length === 1) {
      //   // 播放当前的歌曲
      //   this.changeBtnPlay(true)
      //   return
      // }
      let curNum = this.curIndex + index
      if (curNum < 0) {
        curNum = this.playList.length - 1
      } else if (curNum >= this.playList.length) {
        curNum = 0
      }
      this.changeIndex(curNum)
      this.changeBtnPlay(true)
    }
  },
  computed: {
    ...mapState(['isBtnPlay', 'curIndex', 'playList'])
  }
}
</script>

<style lang="less" scoped>
    .changePayBack{
        width: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        bottom: .1rem;
        .bofang_o
        ,.zanting_0{
            width: 1rem;
            height: 1rem;
        }
    }
</style>
