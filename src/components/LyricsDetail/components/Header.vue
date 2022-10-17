<template>
<!-- 歌词页面头部区域 -->
  <div class="lyricsDetail_Header">
    <div class="left">
        <svg class="icon" aria-hidden="true" @click="backIt">
            <use xlink:href="#icon-zhixiangzuo-copy"></use>
        </svg>
        <div class="musicInfo">
            <marquee  scrolldelay=260>
              <span class="songName">{{playList[curIndex].name}}</span>
            </marquee>
            <div class="singerInfo">
                <span class="singer" v-for="item in playList[curIndex].ar" :key="item.id">{{item.name}}</span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xiangyou1-copy"></use>
                </svg>
            </div>
        </div>
    </div>
    <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lianjie-copy"></use>
        </svg>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'headerIndex',
  methods: {
    ...mapMutations(['changeShowLyrics']),
    backIt () {
      // 关闭弹出层
      this.changeShowLyrics(false)
    }
  },
  computed: {
    ...mapState(['isShowLyrics', 'playList', 'curIndex'])
  }
}
</script>

<style lang="less" scoped>
 .lyricsDetail_Header{
    width: 100%;
    padding: .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
      .left {
        display: flex;
        align-items: center;
        .musicInfo{
            margin-left: .59rem;
            .songName{
                color: #fff;
            }
            .singerInfo{
              color: rgb(166, 175, 190);
                display: flex;
                align-items: center;
                text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                 .icon{
                    width: .3rem;
                    height: .3rem;
                }
            }
        }
    }
    }
</style>
