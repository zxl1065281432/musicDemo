<template>
<img src="@/assets/imgs/registerBgc.jpg" class="bgc">
  <div class="myInfo">
    <div class="header">
        <!-- 用户名字 -->
        <div class="userName">
          <h3>{{userInfo.profile.nickname}}</h3>
          <p>{{userInfo.profile.signature}}</p>
        </div>
        <!-- 用户头像 -->
        <div class="userAvatar">
          <img :src="userInfo.profile.avatarUrl" class="avatar"/>
        </div>
    </div>
    <div class="countInfo">
      <div class="local">
        <span>123</span>
        <p>本地</p>
      </div>
      <div class="favorites">
        <span>{{userInfo.profile.follows}}</span>
        <p>关注</p>
      </div>
      <div class="cloud">
        <span>{{userInfo.profile.followeds}}</span>
        <p>粉丝</p>
      </div>
      <div class="download">
        <span>{{userPlayHistory.length}}</span>
        <p>播放记录</p>
      </div>
    </div>
    <div class="vipManage">
      <img src="@/assets/imgs/Black.jpg">
      <div class="content">
        <svg class="vip" aria-hidden="true">
          <use xlink:href="#icon-VIP"></use>
        </svg>
        <div class="right">
          <span>开会员,抽礼包</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right"></use>
          </svg>
        </div>
      </div>
    </div>
    <!-- 底部区域 -->
    <div class="boxContainer">
      <!-- 基本信息 -->
      <div class="baseInfo">
        <h4>基本信息</h4>
        <span>村龄:{{new Date(userInfo.account.createTime).toLocaleDateString()}}</span>
        <span>性别:{{userInfo.profile.gender === 1 ? '男':'女'}}</span>
        <span>生日:{{new Date(userInfo.profile.birthday).toLocaleString().slice(0,9)}}</span>
        <span>个人简介:{{userInfo.profile.signature}}</span>
      </div>
      <!-- 创建的歌单 -->
      <div class="createdPlaylist">
        <!-- 头部区域 -->
          <div class="header-top">
            <div class="left">
              <span class="myList" @click="curIndex = 0" :class="{cur_active : curIndex === 0}">我的歌单</span>
              <span :class="{cur_active : curIndex === 1}" @click="curIndex = 1">收藏歌单</span>
            </div>
            <div class="right">
              <svg class="icon" aria-hidden="true">
                 <use xlink:href="#icon-jia-xianxingfangkuang"></use>
              </svg>
               <svg class="icon" aria-hidden="true">
                 <use xlink:href="#icon-gengduo-shuxiang"></use>
              </svg>
            </div>
          </div>
          <!-- 我的歌单curIndex = 0 -->
          <div class="myCreated" v-if="curIndex === 0">
            <div class="__left" @click="goLoveSong">
              <img src="@/assets/imgs/love.jpg" class="createImg"/>
              <div class="_name_count">
                <span class="_name">我喜欢的歌曲</span>
                <span class="_count">{{usrLoveMusicList.length}}首</span>
              </div>
            </div>
          </div>
          <!-- 收藏歌单 curIndex = 1 -->
          <div class="myCollected" v-else>
            <h4>暂无</h4>
          </div>
      </div>
      <!-- 退出我的信息 -->
      <button class="back" @click="$router.push('/')">返回</button>
      <button class="loginOut" @click="loginOut">退出登录</button>
    </div>
  </div>
</template>

<script>
import { getItem, removeItem } from '@/utils/storage'
import { mapState, mapMutations } from 'vuex'
import { getPlayHistory } from '@/api/user'

export default {
  name: 'myInfo',
  data () {
    return {
      curIndex: 0, // 我的歌单 收藏歌单 的切换
      // 用户信息
      userInfo: {},
      // 用户播放记录 / 用户喜欢的音乐
      userPlayHistory: []
    }
  },
  computed: {
    ...mapState(['user', 'usrLoveMusicList'])
  },
  created () {
    // 从本地获取用户信息
    this.userInfo = getItem('USER_PROFILE')
    // 发送请求获取用户信息 , 歌单，收藏，mv, dj 数量
    this.getUserDetail()
  },
  methods: {
    ...mapMutations(['getUsrLoveList']),
    // 去我喜欢的音乐
    goLoveSong () {
      this.$router.push('/myLoveSong')
    },
    // 获取用户详情
    async getUserDetail () {
      const res = await getPlayHistory(this.userInfo.profile.userId)
      this.userPlayHistory = res.data.weekData
      // 用户喜欢音乐
      this.getUsrLoveList(this.userPlayHistory)
    },
    // 退出登录
    loginOut () {
      this.$dialog.confirm({
        message: '你确定退出吗？'
      }).then(() => {
        // 清空store/本地 的token ，userinfo
        this.$store.commit('clearOut')
        removeItem('_USER_TOKEN')
        removeItem('USER_PROFILE')
        // 进入登录页面
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="less" scoped>
 .bgc{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.myInfo{
  height: 100vh;
  .header{
    display: flex;
    align-items: center;
    width: 100%;
    padding: .2rem;
    height: 2rem;
    justify-content: space-between;
    .userName{
      h3 {
        color:#fff;
      }
      p{
        margin-top: .2rem;
        color: #fff;
        font-size: .2rem;
      }
    }
    .userAvatar{
      .avatar{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }

    }
  }
  .countInfo{
    display: flex;
    justify-content: space-around;
    color: #fff;
    .local,
    .favorites,
    .cloud,
    .download{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .vipManage{
    position: relative;
    height: .8rem;
    width: 90%;
    border-radius: .2rem;
    margin: 0 auto;
    margin-top: .4rem;
    .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 .2rem;
      height: .8rem;
      line-height: .8rem;
      .vip{
        width: .8rem;
        height: .8rem;
      }
      .right{
        display: flex;
        align-items: center;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-top-left-radius: .2rem;
      border-top-right-radius: .2rem;
    }
    span {
      color: #FFCC65;
    }
  }
}
.boxContainer{
  text-align: center;
  width: 90%;
  height: 3rem;
  margin: 0 auto;
  border-radius: .2rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: rgb(147, 176, 201);
  .baseInfo{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding:.2rem;
    span{
      padding: .1rem 0;
    }
  }
  .createdPlaylist{
    width: 100%;
    height: 3.8rem;
    padding: .1rem;
    margin: 0 auto;
    border-radius: .2rem;
    background-color: rgb(147, 176, 201);
    .myList{
      margin-right: .2rem;

    }
    .cur_active{
       border-bottom: 3px solid rgb(199, 122, 122);
    }
    .header-top{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .myCreated{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .__left{
      display: flex;
      align-items: center;
      }
      .createImg{
        width: 1rem;
        height: 1rem;
        margin-right: .2rem;
        border-radius: .1rem;
      }
      ._name_count{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .myCollected{
      margin: .2rem 0 0 0;
    }
}
}
.back,
.loginOut{
  width: 2rem;
  height: 1rem;
  border-radius: .2rem;
  background-color: rgb(79, 139, 190);
  border: none;
  color: #fff;
  margin: 0 auto;
  margin: .2rem .2rem;
}
.loginOut{
  background-color: rgb(185, 84, 84)
}
</style>
