<template>
  <div class="topicSearch">
    <div class="hot_header">
        <h4>电台榜</h4>
    </div>
    <div class="hot_content">
        <div class="hot_dj">热</div>
        <div class="hot_rank" v-for="(item,i) in hotDjList" :key="item.id">
            <span class="rank_number" :class="{hot_rank_active:i+1 <= 3}">
                {{i+1}}
            </span>
            <span class="rank_name">{{item.name}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { getHotDj } from '@/api/user'

export default {
  name: 'topicSearch',
  data () {
    return {
      hotDjList: []
    }
  },
  methods: {
    async getHotDj () {
      const res = await getHotDj()
      this.hotDjList = res.data.djRadios.slice(0, 12)
    }
  },
  created () {
    this.getHotDj()
  }
}
</script>

<style lang="less" scoped>
.topicSearch{
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
        .hot_dj{
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: .25rem;
            .rank_number{
                display: inline-block;
                width: .5rem;
                text-align: center;
                margin-right: .2rem;
            }
             .hot_rank_active {
                color: #f00;
            }
        }
    }
}
</style>
