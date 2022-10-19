<template>
  <div class="comments_box" >
    <!-- 评论组件 -->
    <div class="header-box">
        <div class="header">
        <svg class="icon" aria-hidden="true" @click="$router.back()">
            <use xlink:href="#icon-zhixiangzuo"></use>
        </svg>
        <span class="left_comments">评论 ({{total}})</span>
        </div>
        <div class="music_current">
            <div class="cover">
                <img :src="playList[curIndex].al.picUrl" >
            </div>
            <div class="musicName">
                <span>{{playList[curIndex].name}}</span>
            </div>
            <div class="singer">
                <i>-</i>
                <span v-for="item in playList[curIndex].ar" :key="item.id">
                    {{item.name}}
                </span>
            </div>
        </div>
    </div>
    <!-- 评论区 -->
    <div class="comment-content">
            <!-- 评论区头部 -->
            <div class="comment-area">
                <div class="c_left">评论区</div>
                <div class="c_right">
                    <span>推荐</span>
                    <span>热门</span>
                    <span>最新</span>
                </div>
            </div>
            <!-- 评论区内容 -->
            <div class="com_content" v-for="item in commentList" :key="item.userId" >
                <!-- 1 -->
                <div class="head">
                      <div class="username">
                         <img :src="item.user.avatarUrl" />
                           <div class="name_time">
                               <div>{{item.user.nickname}}</div>
                               <span>{{changeTime(item.time)}}</span>
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
                    <div class="answer">
                        <span>0条回复</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xiangyou1"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div v-show="finished" class="finished">已经到底了~</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getComment } from '@/api/music'
import { changeTime } from '@/utils/changeTime'

export default {
  name: 'comments_box',
  data () {
    return {
      finished: false,
      // 评论列表
      commentList: [],
      //   总评论数
      total: 0,
      offset: 1
    }
  },
  computed: {
    ...mapState(['playList', 'curIndex'])
  },
  mounted () {
    // 监听滚动事件
    document.querySelector('.comments_box').addEventListener('scroll', this.onScroll)
    this.getCommentList(this.offset)
  },
  methods: {
    // 滚动条监听事件回调
    onScroll () {
      // 内容可视区域的高度。
      const clientHeight = document.querySelector('.comments_box').clientHeight
      // 内容可视区域的高度加上溢出（滚动）的距离。
      /**
       * scrollHeight就是一个元素能够展示其所有内容所需要的最小高度，是元素整个的content加上padding的高度，不包括border。
       * 如果元素内容超过 可视区域，可以想象成将 整个元素撑开的高度。
       */
      const scrollHeight = document.querySelector('.comments_box').scrollHeight
      // 滚动条在Y轴上的滚动距离。
      const scrollTop = document.querySelector('.comments_box').scrollTop
      //   console.log('内容可视区域的高度:' + clientHeight, '滚动条在Y轴上的滚动距离:' + scrollTop, '内容可视区域的高度加上溢出（滚动）的距离:' + scrollHeight)
      if (clientHeight + scrollTop >= scrollHeight - 1) {
        this.offset = this.offset + 1
        // 加载更多操作
        this.getCommentList(this.offset)
      }
    },
    changeTime,
    // 获取歌曲评论
    async getCommentList () {
      const mid = this.playList[this.curIndex].id
      const res = await getComment(mid, this.offset)
      //   去重
      if (this.commentList.length === 80) {
        this.finished = true
        return
      }
      this.commentList.push(...res.data.comments)
      this.total = res.data.total
    }
  }
}
</script>

<style lang="less" scoped>

.comments_box{
        background-color: #eee;
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
    .header-box{
        height: 2rem;
        padding: .2rem;
        background-color: #fff;
        .header{
            display: flex;
            align-items: center;
            .left_comments{
            margin-left:.2rem;
        }
        }
        .music_current{
            display: flex;
            align-items: center;
            margin-top: .2rem;
            .cover {
                width: 1rem;
                height: 1rem;
                img{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
            }
            .musicName{
                flex: .5;
                text-align: center;
            }
        }
    }
    .comment-content{
        padding: .2rem;
        margin-top: .2rem;
        background-color: #fff;
        .comment-area{
            display: flex;
            align-items: center;
            justify-content: space-between;
        .c_right{
            span {
              margin-left: .3rem;
            }
        }
        }
        .com_content{
             padding: .2rem 0;
             border-bottom: 1px solid #eee;
            .head{
                display: flex;
                align-items: center;
                justify-content: space-between;
                img{
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
               }
               .username{
                display: flex;
                align-items: center;
                .name_time{
                    margin-left: .2rem;
                }
               }
               .dianzan{
                display: flex;
                align-items: center;
                .count{
                    height: .2rem;
                    margin-right: .12rem;
                }
               }
            }
            .textarea_box{
            padding-left: 1.2rem;
            .finished{
            text-align: center;
            }
            .answer{
            display: flex;
            align-items: center;
            span {
                color: #9ac8e9;
                font-size: .23rem;
            }
            .icon {
                width: .2rem;
                height: .2rem;
            }
            }
         .textarea{
            line-height: .45rem;
        }
            }

        }
    }
}

</style>
