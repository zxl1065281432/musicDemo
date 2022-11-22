<template>
  <div class="newDetail">
    <!-- 头部 -->
    <div class="topHeader">
      <svg class="icon" aria-hidden="true" @click="$router.back()">
        <use xlink:href="#icon-zhixiangzuo-copy"></use>
      </svg>
      <span>新闻</span>
    </div>
    <!-- 新闻详情 -->
    <h3 class="title">{{newDetail.title}}</h3>
    <p class="source">{{newDetail.source}}</p>
    <div class="contentBox">
      <span class="content">{{newDetail.digest}}</span>
      <img class="pic" :src="item.imgsrc" v-for="(item,i) in newsPic" :key="i">
    </div>
    <p class="goUrl">详细请看:</p>
     <a class="url" :href="newDetail.url">{{newDetail.url}}</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      newDetail: {},
      newsPic: []
    }
  },
  created () {
    const id = this.$route.query.id
    this.newDetail = this.newsList.filter(item => {
      return item.postid === id
    })
    this.newDetail = this.newDetail[0]
    console.log(this.newDetail)
    if (this.newDetail.ads) {
      this.newsPic = this.newDetail.ads
    }
  },
  computed: {
    ...mapState(['newsList'])
  }

}
</script>

<style scoped>
.source {
  margin: 0.2rem 0;
}
.contentBox {
  background: #f0f0f0;
}
.title,
.source {
  padding: 0 10px;
}

.content {
  line-height: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  padding: 0.2rem;
}
.topHeader{
  display: flex;
  align-items: center;
  background-color: #ff1405;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.24rem;
  color: #fff;
}
.topHeader span {
  padding-left: .2rem;
}
.pic{
    width: 100%;
    height: 4.6rem;
    display: block;
    padding: .2rem .2rem;
    text-align: center;
}
.goUrl{
    padding: .2rem;
}
.url {
    display: block;
    font-size: .27rem;
    margin-left: .2rem;
}
</style>
