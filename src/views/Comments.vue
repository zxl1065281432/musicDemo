<template>
    <Comments :isShowIt="true"></Comments>
</template>

<script>
import Comments from '@/components/Comments/index.vue'

export default {
  name: 'comments_box',
  components: { Comments },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

</style>
