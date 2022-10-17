<template>
<!-- 头部导航 -->
  <div class="top_header">
    <div class="left">
       <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zhixiangzuo"></use>
       </svg>
       <span class="left_musicList">歌单</span>
    </div>
  </div>
  <!-- 中间歌单描述 -->
 <div class="cover_description">
   <div class="left_cover_description">
     <img :src="usrLoveMusicList[0].song.al.picUrl" class="coverPic"/>
        <div class="Playback">
           <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-a24gl-play"></use>
           </svg>
        </div>
   </div>
   <div class="right_cover_description">
        <h3 class="title">我喜欢的音乐</h3>
        <!-- 实用v-if 等待数据 playlist.creator有了时候再显示  也可以使用sessionStorage 保存到本地 如果数据没有回来就从本地读取 -->
        <div class="userInfo">
            <img :src="userProfile.avatarUrl" class="user_avatar">
            <span class="userName">{{userProfile.nickname}}</span>
            <span>></span>
        </div>
   </div>
  </div>
   <!-- 底部歌单列表 -->
  <div class="myLoveMusic">
    <!-- 头部区域 -->
    <div class="listenList_header">
        <div class="left_header">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-bofang_o"></use>
            </svg>
            <span>播放全部<em>(共{{usrLoveMusicList.length}}首)</em></span>
        </div>
    </div>
    <!-- 歌单列表内容 -->
    <div class="listenList_music_list" v-for="(item, index) in usrLoveMusicList" :key="index">
        <div class="left_music" @click="listenIt(item)">
            <span class="index">{{index + 1}}</span>
            <div class="musicInfo">
                <strong class="musicName">{{item.song.name}}</strong>
                <div class="singerName">
                    <span v-for="singer in item.song.ar" :key="singer.id" >
                        {{singer.name}}
                    </span>
                </div>
            </div>
        </div>
       <div class="rightIcon">
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
import { getItem } from '@/utils/storage'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      // 用户信息
      userProfile: {}
    }
  },
  computed: {
    ...mapState(['usrLoveMusicList', 'playList'])
  },
  methods: {
    ...mapMutations(['addMusicInList', 'changeIndex']),
    // 听歌
    listenIt (item) {
      // 向歌曲数组中添加歌曲
      this.addMusicInList(item.song)
      // 播放当前的歌曲 - 改变下标
      this.changeIndex(this.playList.length - 1)
    }
  },
  created () {
    const res = getItem('USER_PROFILE')
    this.userProfile = res.profile
  }
}
</script>

<style lang="less" scoped>
.myLoveMusic{
        width: 100%;
        padding: .17rem;
        margin-top: .4rem;
        border-radius: .2rem;
        background-color: #fff;
        .listenList_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left_header{
                display: flex;
                align-items: center;
                .icon{
                    width: .7rem;
                    height: .7rem;
                    margin-right: .3rem;
                }
                span {
                    font-weight: 800;
                    em{
                       font-style:normal;
                       font-weight: 400;
                       font-size:.24rem
                    }
                }
            }
        }
        .listenList_music_list{
            display: flex;
            align-items: center;
            height: 1.245rem;
            justify-content: space-between;
            .left_music{
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
}

.cover_description{
    display: flex;
    height: 3.22rem;
    margin-top: .3rem;
    padding: .3rem;
    .left_cover_description {
    position: relative;
    width: 2.6rem;
    .coverPic {
        border-radius: .15rem;
        width: 2.6rem;
        height: 2.6rem;
    }
    .Playback {
    display: flex;
    position: absolute;
    align-items: center;
    .icon {
        width: .3rem;
        height: .3rem;
    }
}
}
}
.right_cover_description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .title {
        width: 100%;
        padding-left: .14rem;
        font-size: .4rem;
    }
    .userInfo{
        display: flex;
        align-items: center;
        justify-content: left;
        padding-left: .14rem;
        width: 100%;
        margin: .25rem 0;
        .user_avatar {
            border-radius: 50%;
            height: .6rem;
            width: .6rem;
        }
        .userName {
            margin-left: .2rem;
        }
    }
    .description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        padding-left: .14rem;
        font-size: .2rem;
        color: rgb(134, 159, 180);
    }
   }
.top_header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: .41rem;
    padding-bottom: 0;
    align-items: center;

    .left {
        display: flex;
        align-items: center;
        .left_musicList {
            color:#000;
            margin-left: .34rem;
           font-size: .4rem;
        }
    }
}
</style>
