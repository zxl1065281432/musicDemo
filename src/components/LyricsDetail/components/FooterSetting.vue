<template>
  <div class="footerSetting">
        <!-- 底部收藏 下载 评论 列表 -->
      <svg class="icon" aria-hidden="true" @click="likeThis" v-if="!likeIt">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <!-- 喜欢、不喜欢 -->
      <svg class="icon" aria-hidden="true" @click="likeThis" v-else>
        <use xlink:href="#icon-aixin1"></use>
      </svg>
      <!-- 评论 -->
      <svg class="icon" aria-hidden="true" @click="$router.push('/comments')">
        <use xlink:href="#icon-pinglun"></use>
      </svg>
      <!-- 视频 -->
      <svg class="icon" aria-hidden="true" v-if="hasMv" @click="goMv(this.hasMv)">
        <use xlink:href="#icon-shipin"></use>
      </svg>
  </div>
</template>

<script>
import { likeMusic } from '@/api/music'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // 是否喜欢过它
      likeIt: false,
      // 是否有mv
      hasMv: false
    }
  },
  mounted () {
    this.hasMv = this.playList[this.curIndex].mv
  },
  methods: {
    // 喜欢这首歌
    async likeThis () {
      const mId = this.playList[this.curIndex].id
      const res = await likeMusic(mId)
      if (res.data.code === 302) {
        this.likeIt = !this.likeIt
      }
    },
    // 进入视频页
    goMv (mvid) {
      this.$router.push({
        path: '/mv',
        query: {
          id: mvid,
          name: this.playList[this.curIndex].name
        }
      })
    }
  },
  computed: {
    ...mapState(['curIndex', 'playList'])
  }
}
</script>

<style lang="less" scoped>
.footerSetting{
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 13%;
  .download{
    width: .7rem;
    height: .7rem;
  }
}
</style>
