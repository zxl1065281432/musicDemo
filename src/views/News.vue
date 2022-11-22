<template>
  <div>
    <TopHeader></TopHeader>
    <TopNav></TopNav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopHeader from '@/components/News/TopHeader'
import TopNav from '@/components/News/TopNav'
export default {
  name: 'newIndex',
  components: {
    TopHeader,
    TopNav
  }
}
</script>

<style>

</style>
