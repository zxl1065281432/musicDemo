<template>
  <div class="cover_description">
   <div class="left">
     <img :src="playlist.coverImgUrl" class="coverPic"/>
        <div class="Playback">
           <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-a24gl-play"></use>
           </svg>
           <span class="playCount">{{changeCount(playlist.playCount)}}</span>
        </div>
   </div>
   <div class="right">
        <h3 class="title">{{playlist.name}}</h3>
<!-- 实用v-if 等待数据 playlist.creator有了时候再显示  也可以使用sessionStorage 保存到本地 如果数据没有回来就从本地读取 -->
        <div class="userInfo" v-if="playlist.creator">
            <img :src="playlist.creator.avatarUrl" class="user_avatar">
            <span class="userName">用户名称</span>
            <span>></span>
        </div>
        <div class="description">
            {{playlist.description}}
            <i>></i>
        </div>
   </div>
  </div>
</template>

<script>
export default {
  setup (props) {
    function changeCount (count) {
      if (count >= 100000000) {
        return (count / 100000000).toFixed(1) + '亿'
      } else if (count >= 10000) {
        return (count / 100000).toFixed(1) + '万'
      }
    }
    return { changeCount }
  },
  props: ['playlist']
}
</script>

<style lang="less" scoped>
.cover_description{
    display: flex;
    height: 3.22rem;
    margin-top: .3rem;
    padding: .3rem;
    .left {
    position: relative;
    width: 2.6rem;
    .coverPic {
        border-radius: .15rem;
        width: 2.6rem;
        height: 2.6rem;
    }
    .Playback {
    display: flex;
    top: 0;
    right: 0;
    position: absolute;
    align-items: center;
    .icon {
        width: .3rem;
        height: .3rem;
    }
    .playCount {
    color: #fff;
}
}
   }
   .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .title {
        width: 100%;
        padding-left: .14rem;
        color: #fff;
        font-size: .3rem;
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
}

</style>
