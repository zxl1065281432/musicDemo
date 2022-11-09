<template>
  <div class="headerFooter">
       <!--信息 -->
    <div class="headerFooter_Item">
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-xinxi-copy"></use>
         </svg>
      <span class="headerFooter_icon">{{playlist.commentCount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  setup () {

  },
  props: ['playlist']
}
</script>

<style lang="less" scoped>
.headerFooter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .headerFooter_Item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
            width: .58rem;
            height: .58rem;
        }
        .headerFooter_icon {
            color: #fff;
        }
    }
}
</style>
