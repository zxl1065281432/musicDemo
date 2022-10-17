<template>
  <img :src="playList[curIndex].al.picUrl" class="lyricsBgc">
  <div class="lyricsDetail">
      <!-- 头部区域 -->
      <Header></Header>
      <!-- 中间歌曲指针封面 -->
      <div class="middleCover" v-if="!showLyrics" @click="isShowLyrics">
          <div class="cover_vinyl">
            <img :src="playList[curIndex].al.picUrl" class="cover" :class="{img_active:isBtnPlay,img_paused:!isBtnPlay}"/>
            <img src="@/assets/imgs/Vinyl.png" class="Vinyl"/>
          </div>
          <img src="@/assets/imgs/needle.png" class="needle" :class="{needle_active : isBtnPlay}"/>
      </div>
      <!-- 歌词部分 -->
      <div class="lyrics" @click="isShowLyrics" v-else>
          <p v-for="(lyr,i) in getLyrics" :key="i" :class="{active:lyr.lyrisTime<=currentTime && currentTime < lyr.preTime}">{{lyr.lyris}}</p>
      </div>
      <!-- 底部收藏 下载 评论 列表 -->
      <FooterSetting></FooterSetting>
      <!-- 音乐进度条 -->
      <div class="progressMusic">
        <input type="range" v-model="currentTime" class="progress" min="0" step="0.05" :max="curTotalTime">
      </div>
      <!-- 切换播放方式 -->
      <ChangePayback></ChangePayback>
  </div>
</template>

<script>
import Header from '@/components/LyricsDetail/components/Header'
import FooterSetting from '@/components/LyricsDetail/components/FooterSetting'
import ChangePayback from '@/components/LyricsDetail/components/ChangePayback'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'lyricsDetail',
  components: { Header, FooterSetting, ChangePayback },
  data () {
    return {
      showLyrics: false
    }
  },
  props: ['addDuration'],
  computed: {
    ...mapState(['isBtnPlay', 'playList', 'curIndex', 'lyricList', 'currentTime', 'curTotalTime']),
    // 获取歌词 以及时间
    getLyrics () {
      console.log();
      // []表示匹配 []之内的任意一个\r或者\n 字符，+表示匹配所有的\n\r
      let arr = this.lyricList.split(/[(\r\n)]+/)
      let minute, second, mill
      arr = arr.map((item) => {
        if (item[0] === '[') {
          // m修饰符规定: 正则表达式可以执行多行匹配
          minute = item.slice(1, 3)
          second = item.slice(item.indexOf(':') + 1, item.indexOf('.'))
          mill = item.slice(item.indexOf('.') + 1, item.indexOf(']'))
        }
        const lyris = item.slice(item.indexOf(']') + 1, item.length)
        // 当前歌词对应时间
        const lyrisTime = parseInt(minute) * 1000 * 60 + parseInt(second) * 1000 + parseInt(mill)
        return { minute, second, mill, lyris, lyrisTime }
      })
      // 下一句歌词的对应时间
      arr.forEach((item1, i) => {
        if (!arr[i + 1]) {
          item1.prevTime = arr[i].lyrisTime
        } else {
          item1.preTime = arr[i + 1].lyrisTime
        }
      })
      return arr
    }
  },
  updated () {
    // 保存当前歌曲的总时长(避免在created中拿 可能会有延迟响应 拿不到最新的歌曲总时长)
    this.addDuration()
  },
  methods: {
    ...mapMutations(['changeIndex']),
    isShowLyrics () {
      this.showLyrics = !this.showLyrics
    }
  },
  watch: {
    // 监听 currentTime
    currentTime () {
      // 判断当前 是歌词状态 还是 封面图状态！！！
      if (this.showLyrics) {
        const highLight = document.querySelector('p.active')
        if (highLight) {
          // 获取到 当前高亮的字体
          /* 当 当前高亮的字体的offetTop距离其父元素 顶部的高度（highLight.offsetTop） >= 320,
          获取 父元素的滚动条的高度, 让其高度不断改变(用highLight.offsetTop - 320)得到滚动条的高度.
          */
          if (highLight.offsetTop >= 320) {
            const lyrics = document.querySelector('.lyrics')
            lyrics.scrollTop = highLight.offsetTop - 320
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.progress{
        width: 100%;
        height: .05rem;
        position: absolute;
        justify-content: space-around;
        bottom:10%;
}
.lyricsDetail{
    .lyrics{
      overflow: auto;
      height: 9.7rem;
      color: #ffa;
      margin-top: .2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      p{
        margin-bottom: .25rem;
      }
      // 当前歌词
      .active {
        font-size: .4rem;
        color: #fff;
      }
    }
}
.lyricsBgc{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(40px);
}
 .middleCover{
    height: 4.5rem;
    .needle{
        transform: rotate(-15deg);
        }
        .needle,
        .needle_active {
        position: absolute;
        top: 10%;
        left: 47%;
        margin: 0 auto;
        transform-origin: 0%;
        transform: rotate(15deg);
        transition: all 1s ease;
        width: 2.5rem;
        height: 2.5rem;
        }
      .needle_active {
        transform: rotate(15deg);
        }
  }
  .cover_vinyl{
    position: relative;
    top: 50%;
    height: 4.5rem;
    width: 4.5rem;
    margin: 0 auto;
    .cover{
        position: absolute;
        left: .4rem;
        top: .2rem;
        border-radius: 50%;
        width: 3.5rem;
        height: 3.5rem;
        animation: rotating 10s linear infinite;
    }
    // 开始旋转
        .img_active {
          animation-play-state: running;
        }
        // 暂停旋转
        .img_paused {
          animation-play-state: paused;
        }
    .Vinyl{
        position: absolute;
        top: -0.5rem;
        width: 4.5rem;
        height: 4.5rem;
        animation: rotating 10s linear infinite;
        }
  }

   @keyframes rotating {
          0%{
            transform: rotateZ(0deg)
          }
          100%{
            transform: rotateZ(180deg)
          }
   }
</style>
