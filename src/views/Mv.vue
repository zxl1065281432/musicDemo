<template>
  <div class="videoPlay">
    <!-- 头部返回按钮 -->
    <div class="back">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zhixiangzuo"></use>
      </svg>
    </div>
    <div class="songName">
      {{$route.query.name}}
    </div>
    <!-- 视频区 -->
    <video :src="mvUrl" controls class="video"></video>
    <!-- 评论区内容 -->
    <div class="com_content" v-for="item in comments" :key="item.commentId">
      <div class="head">
        <div class="username">
          <img :src="item.user.avatarUrl" />
          <div class="name_time">
            <div>{{item.user.nickname}}</div>
          </div>
        </div>
        <div class="dianzan">
          <div class="count">{{item.likedCount}}</div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg>
        </div>
      </div>
      <!-- 2 -->
      <div class="textarea_box">
        <div class="textarea">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMv, getMvComments } from '@/api/music'

export default {
  name: 'MvIndex',
  data () {
    return {
      // mv播放地址
      mvUrl: '',
      comments: []
    }
  },
  mounted () {
    // 获取mv地址
    this.getMvUrl()
    // 获取mv的评论
    this.getMvComments()
  },
  methods: {
    // 获取mv地址
    async getMvUrl () {
      const res = await getMv(this.$route.query.id)
      this.mvUrl = res.data.data.url
    },
    // 获取mv的评论
    async getMvComments () {
      const res = await getMvComments(this.$route.query.id)
      this.comments = res.data.comments
    }
  }
}
</script>

<style lang="less" scoped>
.videoPlay {
  .back {
    width: 100%;
    height: 1rem;
    line-height: 1.4rem;
    text-align: center;
    background: rgba(201, 11, 11, 0.6);
  }
  .songName {
    padding: 0.2rem;
  }
  video {
    width: 100%;
  }
  .com_content {
    padding: 0.2rem 0;
    border-bottom: 1px solid #eee;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
      .username {
        display: flex;
        align-items: center;
        .name_time {
          margin-left: 0.2rem;
        }
      }
      .dianzan {
        display: flex;
        align-items: center;
        .count {
          height: 0.2rem;
          margin-right: 0.12rem;
        }
      }
    }
    .textarea_box {
      padding-left: 1.2rem;
      .finished {
        text-align: center;
      }
      .textarea {
        line-height: 0.45rem;
      }
    }
  }
}
</style>
