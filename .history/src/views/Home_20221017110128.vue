<template>
  <div class="homeContainer">
    <TopNav></TopNav>
    <CarouselChart></CarouselChart>
  </div>
</template>

<script>
import CarouselChart from '@/components/home/CarouselChart'
import CatalogList from '@/components/home/CatalogList'
import FindGoodMusic from '@/components/home/FindGoodMusic'
import RecommendMusic from '@/components/home/RecommendMusic'
import TopNav from '@/components/home/TopNav'
export default {
  name: 'HomeContainer',
  components: { CarouselChart, CatalogList, FindGoodMusic, RecommendMusic, TopNav }
}
</script>

<style>

</style>
