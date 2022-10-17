<template>
  <div class="CarouselChart">
   <van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in state.images" :key="image">
    <img :src="image.imageUrl" class="CarouselChart_img"/>
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>

import { onMounted, reactive } from 'vue'
import { getBannerList } from '@/api/home.js'
export default {
  setup () {
    const state = reactive({
      images: []
    })
    onMounted(async () => {
      const res = await getBannerList()
      state.images = res.data.banners
    })
    return { state }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
    width: 100%;
        .van-swipe-item {
            padding: 10px;
            img {
                border-radius: .225rem;
                width: 100%;
                height: 3.25rem;
            }
        }
}
</style>
