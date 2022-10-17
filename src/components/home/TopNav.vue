<template>
  <div class="home">
    <div class="home_header">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hanbaocaidan"></use>
      </svg>
      <div class="home_middle">
        <span @click="goIdxPage(0)" :class="{home_active:curIdx === 0}">我的</span>
        <span @click="goIdxPage(1)" :class="{home_active:curIdx === 1}">发现</span>
        <span @click="goIdxPage(2)" :class="{home_active:curIdx === 2}">云村</span>
        <span @click="goIdxPage(3)" :class="{home_active:curIdx === 3}">视频</span>
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
        this.$router.push('/myInfo')
      } else if (idx === 1) {
        this.curIdx = 1
      } else if (idx === 2) {
        this.curIdx = 2
      } else if (idx === 3) {
        this.curIdx = 3
      }
    }
  }
}
</script>
<style lang="less" scoped>
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
