<template>
  <div class="home">
    <div class="home_header">
      <img  class="logo" src="@/assets/logo.png"/>
      <div class="home_middle">
        <span @click="goIdxPage(0)" :class="{home_active:curIdx === 0}">首页</span>
        <span @click="goIdxPage(1)" :class="{home_active:curIdx === 1}">我的</span>
        <span @click="goIdxPage(2)" :class="{home_active:curIdx === 3}">新闻</span>
      </div>
      <!-- 搜索 -->
       <svg class="icon" aria-hidden="true" @click="goSearch">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      // 当前页下标
      curIdx: 0
    }
  },
  methods: {
    // 进入搜索页面
    goSearch () {
      this.$router.push('/search')
    },
    // 进入个人中心
    goIdxPage (idx) {
      if (idx === 0) {
        this.curIdx = 0
      } else if (idx === 1) {
        this.$router.push('/myInfo')
      } else if (idx === 2) {
        this.curIdx = 2
        // 跳转到新闻页面
        this.$router.push('/news/newsList')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.logo{
  width: .6rem;
  height: .6rem;
}
    .home_header {
        padding: .225rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .home_middle {
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .home_active {
        border-bottom: .05rem solid rgb(69, 61, 61)
      }
    }
</style>
