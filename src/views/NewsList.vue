<template>
  <div class="newsDetail">
    <van-cell-group inset>
      <van-cell :label="item.source" v-for="item in newsList" :key="item.postid" @click="goNewsDetail(item.postid)">
        <template #title>
          <span>{{item.title}}</span>
        </template>
        <template #default>
          <img :src="item.imgsrc" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'newsDetail',
  data () {
    return {
      newsList: []
    }
  },
  async created () {
    // 获取新闻列表
    const res = await this.$store.dispatch('getNewsList')
    this.newsList = res
  },
  methods: {
    // 进入新闻详情
    goNewsDetail (id) {
      this.$router.push({
        path: '/newsDetail',
        query: {
          id
        }
      })
    }
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
