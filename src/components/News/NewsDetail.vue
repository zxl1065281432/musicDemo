<template>
  <div class="newsDetail">
    <van-cell-group inset>
      <van-cell :label="item.source" v-for="item in newsList" :key="item.postid">
        <template #title>
          <span>{{item.digest}}</span>
        </template>
        <template #default>
          <img :src="item.imgsrc" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getNews } from '@/api/news'
export default {
  name: 'newsDetail',
  data () {
    return {
      newsList: []
    }
  },
  async created () {
    const res = await getNews()
    console.log(res.data.T1348647853363)
    this.newsList = res.data.T1348647853363
  }
}
</script>

<style scoped>
img {
  width: 2rem;
  height: 1.5rem;
}
.van-cell__title span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
