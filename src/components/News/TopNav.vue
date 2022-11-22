<template>
  <div class="topNav" @click="clickIt">
    <span class="active" @click="goToday">今日</span>
    <span @click="goHistory">历史</span>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  methods: {
    clickIt (e) {
    //   e.target.className = 'active'
      if (e.target.nodeName !== 'DIV') {
        let childrens = e.target.parentNode.children
        childrens = Array.from(childrens)
        childrens.forEach(item => {
          item.className = ''
        })
        e.target.className = 'active'
      }
    },
    // 今日
    goToday () {
      this.$router.push('/news/newsList')
    },
    // 浏览历史
    goHistory () {
      this.$router.push('/news/newsHistory')
    }
  }
}
</script>

<style lang="less" scoped>
.topNav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ff1305;
    color: #fff;
    height: .8rem;
    line-height: 0.8rem;
}
span {
    height: .4rem;
    line-height: .4rem;
}
.active {
    border-radius: .3rem;
    box-sizing: border-box;
    padding: 0 10px;
    background:rgba(0, 0, 0, .2s) ;
}
</style>>
