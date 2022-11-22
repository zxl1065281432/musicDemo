<template>
  <div class="topHeader">
    <svg class="icon" aria-hidden="true" @click="$router.push('/')">
        <use xlink:href="#icon-zhixiangzuo-copy"></use>
    </svg>
   <span class="">新闻 > {{curBread}}</span>
  </div>
</template>

<script>
export default {
  name: 'topHeader_news',
  computed: {
    curBread () {
      if (this.$route.path.indexOf('newsList') !== -1) {
        return '今日'
      } else {
        return '历史'
      }
    }
  }
}
</script>

<style scoped>
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
</style>
