<template>
    <div class="FooterMusic" v-show="$route.meta.isShowBottom">
        <!-- 播放列表 -->
        <div class="_FooterMusic_left" @click="showPopup">
            <!-- 左边封面 -->
        <div class="_FooterMusic_left_cover">
            <img class="_FooterMusic_img" :src="playList[curIndex].al.picUrl" :class="{img_active:isBtnPlay,img_paused:!isBtnPlay}"/>
        </div>
        <!-- 播放提示信息 -->
        <div class="_FooterMusic_playInfo">
            <marquee scrolldelay=260>
              <p>{{playList[curIndex].name}}</p>
            </marquee>
            <div class="_FooterMusic_singer">
              <span v-for="item in playList[curIndex].ar" :key="item.id">{{item.name}}</span>
            </div>
        </div>
        </div>
        <div class="_FooterMusic_right">
                <!-- 播放按钮 -->
            <div class="playBtn" v-if="!isBtnPlay">
                <svg class="icon" aria-hidden="true" @click="playSong">
                    <use xlink:href="#icon-bofang_o"></use>
                </svg>
            </div>
                <!-- 暂停按钮 -->
             <div class="stopBtn" v-else>
                <svg class="icon" aria-hidden="true" @click="playSong">
                    <use xlink:href="#icon-zanting_o"></use>
                </svg>
            </div>
            <!-- 播放菜单列表 -->
            <div class="playMenu">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-caidan"></use>
                </svg>
            </div>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[curIndex].id}.mp3`"></audio>
         <div class="popShow" v-if="isShowLyrics">
            <!-- 歌词弹出层 -->
          <van-popup v-model:show="isShowLyrics" position="right" :style="{height:'100%', width: '100%' }">
            <LyricsDetail :addDuration="addDuration"></LyricsDetail>
          </van-popup>
         </div>
    </div>
</template>

<script>
import LyricsDetail from '@/components/LyricsDetail'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BottomPlayer',
  components: { LyricsDetail },
  provide () {
    return {
      play: this.playSong
    }
  },
  data () {
    return {
      // 定时器id
      timer: 0
    }
  },
  methods: {
    ...mapMutations(['changeBtnPlay', 'changeShowLyrics', 'changeCurrentTime', 'changeTotalTime']),
    // 播放/暂停 音乐按钮回调
    playSong () {
      if (this.isBtnPlay) {
        // 暂停播放
        this.$refs.audio.pause()
        // 调用mutations改变仓库store中的isBtnPlay
        this.changeBtnPlay(false)
        // 清除定时器
        clearInterval(this.timer)
      } else {
        // 开始播放
        this.$refs.audio.play()
        // 开始计时器
        this.showCurrentTime()
        // 调用mutations改变仓库store中的isBtnPlay
        this.changeBtnPlay(true)
      }
    },
    // 显示歌词弹出层
    showPopup () {
      this.changeShowLyrics(true)
    },
    // 显示当前时间
    showCurrentTime () {
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.$refs.audio) {
          this.changeCurrentTime(this.$refs.audio.currentTime * 1000)
        }
      }, 1000)
    },
    // 保存当前歌曲的总时长
    addDuration () {
      if (!isNaN(this.$refs.audio.duration)) {
        this.changeTotalTime(this.$refs.audio.duration * 1000)
      }
    }
  },
  created () {
    // 获取当前播放歌曲的歌词
    this.$store.dispatch('getLyricsList', this.playList[this.curIndex].id)
  },
  updated () {
    // 保存当前歌曲的总时长
    this.addDuration()
    // 获取当前播放歌曲的歌词
    this.$store.dispatch('getLyricsList', this.playList[this.curIndex].id)
    // 清除定时器
    clearInterval(this.timer)
    // 开始计时器
    this.showCurrentTime()
  },
  computed: {
    ...mapState(['playList', 'curIndex', 'isBtnPlay', 'isShowLyrics'])

  },
  watch: {
    // 监听播放歌单的数组变化
    playList: {
      handler: function () {
        //   自动播放歌曲
        this.$nextTick(() => {
          this.$refs.audio.autoplay = true
          // 将播放按钮的样式改为正在播放
          this.changeBtnPlay(true)
        })
      },
      // 深度监听:!!!!
      deep: true
    },
    // 监听按钮是否为播放状态
    isBtnPlay: {
      handler (newValue) {
        if (!newValue) {
          this.$nextTick(() => {
          // 开始播放
            this.$refs.audio.pause()
          })
          return
        }
        this.$nextTick(() => {
          // 开始播放
          this.$refs.audio.play()
        })
      },
      immediate: true
    },
    // 监听下标的变化
    curIndex () {
      // 开始播放
      this.$refs.audio.autoplay = true
    }
  }
}
</script>

<style lang="less" scoped>
.FooterMusic {
    display: flex;
    justify-content: space-around;
    position: fixed;;
    bottom: 0;
    width: 100%;
    height: 1.4rem;
    align-items: center;
    background-color: #eee;
    ._FooterMusic_left {
        display: flex;
        align-items: center;
        ._FooterMusic_left_cover {
            margin-right: .3rem;
            ._FooterMusic_img {
              width: 1rem;
              height: 1rem;
              border-radius: 50%;
              animation: rotateIt 10s linear infinite;
            }
            // 开始旋转
            .img_active {
              animation-play-state: running;
            }
            // 暂停旋转
            .img_paused {
              animation-play-state: paused;
            }
            @keyframes rotateIt {
              0%{
                transform: rotateZ(0deg);
              }
              100%{
                transform:rotateZ(360deg)
              }
            }
      }
    }
    ._FooterMusic_playInfo{
      display: flex;
      flex-direction: column;
      p,
      ._FooterMusic_singer{
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      ._FooterMusic_singer {
        span {
         margin-right: .155rem;
        }
      }
    }
    ._FooterMusic_right{
        display: flex;
        align-items: center;
        .stopBtn,
        .playBtn{
          text-align: center;
            width: 1.4rem;
           .icon {
                width: 1rem;
                height: 1rem;
            }
        }
        .playMenu{
            .icon {
                    width: .7rem;
                    height: .7rem;
                    margin-left: .2rem;
            }
        }
    }
}

</style>
