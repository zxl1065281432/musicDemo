<template>
  <div class="listenList">
    <!-- 播放列表 -->
    <!-- 头部区域 -->
    <div class="listenList_header">
        <div class="listenList_left">
            <svg class="listenList_icon" aria-hidden="true" @click="playAllSongs">
                <use xlink:href="#icon-bofang_o"></use>
            </svg>
            <span class="listenList_all">播放全部<em>(共{{state.allMusicList.length}}首)</em></span>
        </div>
        <div class="listenList_right">
            <button class="favorites"><i>+</i>收藏({{subscribedCount}})</button>
        </div>
    </div>
    <!-- 底部歌单列表 -->
    <div class="listenList_music_list" v-for="(item, index) in state.allMusicList" :key="index">
        <div class="listenListx_list_left"  @click="changeSongList(index)">
            <span class="index">{{index + 1}}</span>
            <div class="musicInfo">
                <strong class="musicName">{{item.name}}</strong>
                <div class="singerNames">
                    <span v-for="singer in item.ar" :key="singer.id" >
                        {{singer.name}}
                    </span>
                </div>
            </div>
        </div>
       <div class="__listenList_right">
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
</template>

<script>
import { getAllMusic } from '@/api/home'
import { onMounted, reactive } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { mapState, mapMutations } from 'vuex'
export default {
  setup (props) {
    const state = reactive({
      // 所有音乐的列表
      allMusicList: []
    })
    // 获取url后面的id
    const id = useRoute().query.id
    onMounted(async () => {
      const res = await getAllMusic(id)
      state.allMusicList = res.data.songs
    })
    return { state, id }
  },
  methods: {
    ...mapMutations(['changeBtnPlay', 'changeIt', 'changeIndex']),
    // 切换音乐
    changeSongList (index) {
      // 将歌单 列表传给vuex中的playList
      this.changeIt(this.state.allMusicList)
      //   改变vuex中的默认下标
      this.changeIndex(index)
      //   实现自动播放功能 -> 在BottomPlayer中实用watch监听 默认下标的更改
    },
    // 播放全部歌单歌曲
    playAllSongs () {
      this.changeSongList(0)
    }
  },
  computed: {
    ...mapState(['playList', 'curIndex'])
  },
  props: ['subscribedCount']
}
</script>

<style lang="less" scoped>
    .listenList{
        width: 100%;
        padding: .17rem;
        margin-top: .4rem;
        border-radius: .2rem;
        background-color: #fff;
        .listenList_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .listenList_left{
                display: flex;
                align-items: center;
                .listenList_icon{
                    width: .7rem;
                    height: .7rem;
                    margin-right: .3rem;
                }
                .listenList_all {
                    font-weight: 800;
                    em{
                       font-style:normal;
                       font-weight: 400;
                       font-size:.24rem
                    }
                }
            }
            .right{
                .favorites {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    height: 0.8rem;
                    width: 2.5rem;
                    border: none;
                    border-radius: .5rem;
                    color: #fff;
                    background-color: #f00;
                    i{
                        font-size:0.58rem;
                    }
                }
            }
        }
        .listenList_music_list{
            display: flex;
            align-items: center;
            height: 1.245rem;
            justify-content: space-between;
            .listenList_list_left{
                display: flex;
                align-items: center;
                .index{
                    width: .4rem;
                }
            }
            .musicInfo{
                display: flex;
                width: 4.5rem;
                flex-direction: column;
                align-items: left;
                margin-left: .5rem;
                .musicName{
                    font-weight: 550;
                }
                .musicName,
                .singerName > span {
                      display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                }
                .singerNames{
                    display: flex;
                    span {
                        font-size: .26rem;
                        padding-right: .2rem;
                    }
                }
            }
            .icon{
                margin-right: .2rem;
            }
        }
    }
</style>
