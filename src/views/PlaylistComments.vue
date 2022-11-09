<template>
    <img class="playlist_comments" :src="state.playlist.coverImgUrl" >
    <div class="topHead">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-zhixiangzuo-copy"></use>
         </svg>
        <span class="text">歌单评论</span>
    </div>
    <!-- 封面 描述 用户信息 -->
    <CoverDescription :playlist="state.playlist"></CoverDescription>
    <!-- 歌单评论 -->
    <Comments :isShowIt="false"></Comments>
</template>

<script>
import Comments from '@/components/Comments/index.vue'
import CoverDescription from '@/components/musciDetail/CoverDescription'
import { getPlayList } from '@/api/home'

import { onMounted, reactive } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
  name: 'comments_box',
  setup () {
    const state = reactive({
      playlist: {}
    })
    const id = useRoute().query.id
    onMounted(async () => {
      const res = await getPlayList(id)
      state.playlist = res.data.playlist
      // 防止页面刷新,数据丢失，将数据保存到sessionStorage
    })
    return { state }
  },
  components: { Comments, CoverDescription }
}
</script>

<style lang="less" scoped>
.playlist_comments {
  position: fixed;
  width: 100%;
  height: 6.5rem;
  z-index:-1;
  background-attachment: fixed;
  // 虚化
  filter:blur(.6rem);
}
.topHead{
    display: flex;
    align-items: center;
    .text{
        padding-left: .2rem;
        font-size: .45rem;
    }
}
</style>
