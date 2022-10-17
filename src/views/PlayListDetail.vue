<template>
  <div>
    <img class="playListDetail_img" :src="state.playlist.coverImgUrl" >
    <!-- 歌单详情页 -->
    <TopHeader :playlist="state.playlist"></TopHeader>
    <!-- 封面 描述 用户信息 -->
    <CoverDescription :playlist="state.playlist"></CoverDescription>
    <!-- 评论 下载 分享  -->
    <HeaderFooter :playlist="state.playlist"></HeaderFooter>
    <!-- 播放列表区域 -->
    <ListenList :playlist="state.playlist" :subscribedCount="state.playlist.subscribedCount"></ListenList>
  </div>
</template>

<script>
import CoverDescription from '@/components/musciDetail/CoverDescription'
import TopHeader from '@/components/musciDetail/TopHeader'
import HeaderFooter from '@/components/musciDetail/HeaderFooter'
import ListenList from '@/components/musciDetail/ListenList'
import { getPlayList } from '@/api/home'

import { onMounted, reactive } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
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
  components: { TopHeader, CoverDescription, HeaderFooter, ListenList }
}
</script>

<style lang="less" scoped>
.playListDetail_img {
  position: fixed;
  width: 100%;
  height: 6.5rem;
  z-index:-1;
  background-attachment: fixed;
  // 虚化
  filter:blur(.6rem);
}
</style>
