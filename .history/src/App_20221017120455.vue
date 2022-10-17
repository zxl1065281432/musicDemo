<template>
  <div class="main">
      <router-view/>
      <BottomPlayer></BottomPlayer>
  </div>
</template>
<script>
import BottomPlayer from '@/components/BottomPlayer'
export default {
  components: { BottomPlayer }
}
</script>
<style lang="less">
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: .5rem;
  height: .5rem;
}
a{
  text-decoration: none;
  color: #000;
}
</style>
