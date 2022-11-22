<template>
  <div class="homeContainer">
    <TopNav></TopNav>
    <!-- 轮播图 -->
    <CarouselChart></CarouselChart>
    <!-- 发现好歌单头部 -->
    <FindGoodMusic></FindGoodMusic>
    <!-- 推荐音乐列表 -->
    <RecommendMusic></RecommendMusic>
  </div>
</template>

<script>
import CarouselChart from '@/components/home/CarouselChart'
import FindGoodMusic from '@/components/home/FindGoodMusic'
import RecommendMusic from '@/components/home/RecommendMusic'
import TopNav from '@/components/home/TopNav'
export default {
  name: 'HomeContainer',
  components: { CarouselChart, FindGoodMusic, RecommendMusic, TopNav }
}
</script>

<style>

</style>
