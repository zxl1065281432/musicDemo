<template>
  <div class="top_header">
    <div class="top_header__left">
       <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zhixiangzuo-copy"></use>
       </svg>
       <span class="left_musicList">歌单</span>
    </div>
    <div class="top_header__right">
        <svg id="top_header_search" class="icon" aria-hidden="true" @click="$router.push('/search')">
          <use xlink:href="#icon-sousuo-copy"></use>
       </svg>
       <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-hanbaocaidan-copy"></use>
       </svg>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.top_header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: .41rem;
    padding-bottom: 0;
    align-items: center;
    .top_header__left {
        .left_musicList {
            color:#fff;
            margin-left: .34rem;
           font-size: .4rem;
        }
    }
    .top_header__left,
    .top_header__right {
       display: flex;
        align-items: center;
    }
    .top_header__right {
        #top_header_search{
            margin-right: .8rem;
        }
    }
}
</style>
