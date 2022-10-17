<template>
  <div class="searchContainer">
    <!-- 头部搜索 -->
    <div class="headerSearch">
        <svg class="icon" aria-hidden="true" @click="$router.back()">
            <use xlink:href="#icon-zhixiangzuo"></use>
        </svg>
        <InputFrom placehoder="请输入内容" v-model:inputValue.trim()="inputValue"></InputFrom>
        <span class="searchIt" @click="seachItem">搜索</span>
    </div>
    <!-- 搜索历史 -->
    <div class="searchHistory">
        <div class="history_header">
            <span>历史</span>
            <svg class="icon" aria-hidden="true" @click="deleteItem">
               <use xlink:href="#icon-shanchu"></use>
            </svg>
        </div>
        <div class="history_content">
            <div class="history_content_item" v-for="(item,i) in historyList" :key="i" @click="searchHistory(item)">
                {{item}}
            </div>
        </div>
    </div>
    <!-- 搜索结果  -->
    <div class="searchResult" v-if="isShowResult">
        <div class="searchResult_music_list" v-for="(item, index) in searchList" :key="item.id">
            <div class="left" @click="listenIt(item)">
                <span class="index">{{index + 1}}</span>
                <div class="musicInfo">
                    <strong class="musicName">{{item.name}}</strong>
                    <div class="singerName">
                        <span v-for="singer in item.ar" :key="singer.id">
                            {{singer.name}}
                        </span>
                    </div>
                </div>
            </div>
        <div class="right">
            <!-- 视频 -->
            <svg class="icon" aria-hidden="true" v-if="item.mv !== 0">
                <use xlink:href="#icon-shipin"></use>
            </svg>
            <!-- 菜单 -->
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-hanbaocaidan"></use>
            </svg>
        </div>
        </div>
    </div>
    <!-- 榜单区域 -->
    <van-swipe :loop="false" :width="220" :show-indicators="false" v-else>
         <van-swipe-item>
            <!-- 热搜榜 -->
            <HotSearch @getHotClickList="getHotClickList"></HotSearch>
         </van-swipe-item>
        <van-swipe-item>
            <!-- 热门DJ电台 -->
            <HotDJ></HotDJ>
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import InputFrom from '@/components/Input'
import HotSearch from '@/components/SearchPage/HotSearch'
import HotDJ from '@/components/SearchPage/HotDj.vue'
import { setItem, getItem, removeItem } from '@/utils/storage'
import { getSearchMusic } from '@/api/search'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'searchPage',
  components: { InputFrom, HotSearch, HotDJ },
  data () {
    return {
      // 搜索关键字
      inputValue: '',
      // 搜索历史数组
      historyList: getItem('HISTORYLIST') || [],
      //   搜索结果数组
      searchList: []
    }
  },
  computed: {
    ...mapState(['playList', 'isShowResult'])
  },
  watch: {
    // 监听路由是否发生改变 ，
    $route: {
      handler () {
        // 将搜索结果隐藏
        this.changeShowResult(false)
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations(['addMusicInList', 'changeIndex', 'changeShowResult']),
    // 获取热搜榜点击后的得到的搜索结果数组
    getHotClickList (valueList) {
      // 获取到子组件传来的 点击热搜榜而获取到的对应歌手的歌曲数组
      this.searchList = valueList
      //   改变结果显示状态
      this.changeShowResult(true)
    },
    // 搜索按钮回调
    async seachItem () {
      if (this.inputValue.length > 20) {
        alert('输入太长请重新输入')
        return
      }
      if (this.inputValue.length === 0) {
        alert('请输入内容')
        return
      }
      // 保存到数组
      this.historyList.unshift(this.inputValue)
      //   去重
      this.historyList = [...new Set(this.historyList)]
      if (this.historyList.length > 8) {
        this.historyList.pop()
      }
      //   保存到本地
      setItem('HISTORYLIST', this.historyList)
      //   进行搜索
      const res = await getSearchMusic(this.inputValue)
      this.searchList = res.data.result.songs
      //   改变结果显示状态
      this.changeShowResult(true)
    },
    // 根据搜索历史进行搜索
    async searchHistory (item) {
      //   进行搜索
      const res = await getSearchMusic(item)
      this.searchList = res.data.result.songs
      //   改变结果显示状态
      this.changeShowResult(true)
    },
    // 删除按钮回调
    deleteItem () {
      // 删除数组
      this.historyList = []
      // 删除本地
      removeItem('HISTORYLIST')
    },
    // 听当前点击的歌曲
    listenIt (item) {
      // 将当前搜索 点击的歌曲放在歌曲数组的最后一个 进行播放
      this.addMusicInList(item)
      // 改变播放下标进行播放
      this.changeIndex(this.playList.length - 1)
    }
  }
}
</script>

<style lang="less" scoped>
.searchContainer{
    background-color: #eee;
    height: 100vh;
    padding: .2rem;
    .searchResult{
        height: 100%;
        padding-bottom: .2rem;
        overflow: scroll;
    }
}
.headerSearch{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.history_header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: .2rem 0;
    align-items: center;
    span{
        font-weight: 550;
    }
    .icon{
        width: .4rem;
        height: .4rem;
    }
}
.history_content{
    .history_content_item{
        display: inline-block;
        border-radius: .3rem;
        padding: 0 .2rem;
        margin-right: .16rem;
        margin-bottom: .2rem;
        line-height: .5rem;
        height: .5rem;
        background-color: #fff;
    }
}
.searchResult_music_list{
            display: flex;
            align-items: center;
            height: 1.245rem;
            justify-content: space-between;
            .left{
                display: flex;
                align-items: center;
                .index{
                    width: .4rem;
                }
            }
            .musicInfo{
                display: flex;
                width: 4.5rem;
                text-align: left;
                flex-direction: column;
                align-items: left;
                margin-left: .5rem;
                .musicName{
                    font-weight: 550;
                      display: -webkit-box;
                      -webkit-line-clamp: 1;
                      -webkit-box-orient: vertical;
                      text-overflow: ellipsis;
                      overflow: hidden;
                }
                .singerName{
                    display: flex;
                    span {
                        font-size: .26rem;
                        padding-right: .2rem;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
            .icon{
                margin-right: .2rem;
            }
}
</style>
