<template>
  <div class="footerSetting">
        <!-- 底部收藏 下载 评论 列表 -->
      <svg class="icon" aria-hidden="true" @click="likeThis" v-if="!likeIt">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="likeThis" v-else>
        <use xlink:href="#icon-aixin1"></use>
      </svg>
      <svg class="download" aria-hidden="true">
        <use xlink:href="#icon-yunxiazai_o"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-music"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pinglun"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
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
      likeIt: false
    }
  },
  methods: {
    // 喜欢这首歌
    async likeThis () {
      const mId = this.playList[this.curIndex].id
      const res = await likeMusic(mId)
      if (res.data.code === 302) {
        this.likeIt = !this.likeIt
      }
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
