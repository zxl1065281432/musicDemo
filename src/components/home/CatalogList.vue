<template>
   <!-- 目录列表 -->
  <div class="CatalogList">
      <!--每日推荐 -->
    <div class="Catalog_Item">
         <svg class="Catalog_icon" aria-hidden="true">
           <use xlink:href="#icon-tuijian1"></use>
         </svg>
      <span>每日推荐</span>
    </div>
      <!--私人FM  -->
    <div class="Catalog_Item">
          <svg class="Catalog_icon" aria-hidden="true">
           <use xlink:href="#icon-diantai1"></use>
          </svg>
        <span>私人FM</span>
    </div>
      <!-- 歌单 -->
     <div class="Catalog_Item">
         <svg class="Catalog_icon" aria-hidden="true">
           <use xlink:href="#icon-gedan1"></use>
         </svg>
      <span>歌单</span>
     </div>
      <!-- 排行榜 -->
      <div class="Catalog_Item">
        <svg class="Catalog_icon" aria-hidden="true">
         <use xlink:href="#icon-paihangbang"></use>
        </svg>
        <span>排行榜</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.CatalogList {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .Catalog_Item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
     .Catalog_icon {
    width: 1rem;
    height: 1rem;
 }
}

</style>
