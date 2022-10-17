<template>
    <!-- 热搜榜 -->
  <div class="hotSearch">
    <div class="hot_header">
        <h4>热搜榜</h4>
    </div>
    <div class="hot_content">
        <div class="hot">热</div>
        <div class="hot_rank" v-for="(item,i) in hotList" :key="item.id" @click="goHotItem(item.searchWord)">
            <span class="rank_number" :class="{active:i+1 <= 3}">
                {{i+1}}
            </span>
            <span class="rank_name">{{item.searchWord}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { getHotList } from '@/api/user'
import { getSearchMusic } from '@/api/search'
export default {
  name: 'HotSearch',
  data () {
    return {
      // 热搜榜列表
      hotList: [],
      // 点击热搜榜而获取到的对应歌手的歌曲数组
      searchHotList: []
    }
  },
  created () {
    this.getHotList()
  },
  methods: {
    // 获取热搜榜
    async getHotList () {
      const res = await getHotList()
      this.hotList = res.data.data.slice(0, 12)
    },
    // 点击热搜榜回调
    async goHotItem (searchWord) {
      const res = await getSearchMusic(searchWord)
      this.searchHotList = res.data.result.songs
      this.$emit('getHotClickList', this.searchHotList)
    }
  }
}
</script>

<style lang="less" scoped>
.hotSearch{
    position: relative;
    height: 100%;
    width: 4rem;
    border-radius: .2rem;
    padding: 0.2rem;
    background-color: #fff;
    .hot_header{
        margin-bottom: .2rem;
    }
    .hot_content{
        .hot{
            position: absolute;
            right: 1.2rem;
            font-size: .26rem;
            top: .82rem;
            color:#f00;
            background-color: rgb(236, 195, 195);
            box-shadow:0rem 0rem .1rem #f00 ;
            opacity: .8;
        }
        .hot_rank{
            margin-bottom: .25rem;
            .rank_number{
                display: inline-block;
                width: .5rem;
                text-align: center;
                margin-right: .2rem;
            }
             .active {
                color: #f00;
            }
        }
    }
}
</style>
