<template>
<!-- 推荐好歌单 -->
  <div class="recommendMusic">
    <van-swipe :loop="false" :width="150" :show-indicators="false">
        <van-swipe-item v-for="item in state.personalizeOne" :key="item.id">
          <router-link :to="{path:'playListDetail',query:{id:item.id}}">
          <div class="topPicInfo">
            <!-- 图片 -->
            <div class="imgDiv">
                <img :src="item.picUrl">
            </div>
          </div>
            <!-- 文字描述 -->
            <div class="description">
                <p>{{item.name}}</p>
            </div>
            </router-link>
        </van-swipe-item>
    </van-swipe>
    <van-swipe :loop="false" :width="150" :show-indicators="false">
        <van-swipe-item v-for="item in state.personalizeTwo" :key="item.id">
          <router-link :to="{path:'playListDetail',query:{id:item.id}}">
          <div class="topPicInfo">
              <!-- 播放量 -->
            <!-- <div class="Playback">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-a24gl-play"></use>
                </svg>
                <span>{{changeCount(item.playCount)}}</span>
            </div> -->
            <!-- 图片 -->
            <div class="imgDiv">
                <img :src="item.picUrl">
            </div>
          </div>
            <!-- 文字描述 -->
            <div class="description">
                <p>{{item.name}}</p>
            </div>
            </router-link>
        </van-swipe-item>
    </van-swipe>
    <van-swipe :loop="false" :width="150" :show-indicators="false">
        <van-swipe-item v-for="item in state.personalizeThree" :key="item.id">
          <router-link :to="{path:'playListDetail',query:{id:item.id}}">
          <div class="topPicInfo">
            <!-- 图片 -->
            <div class="imgDiv">
                <img :src="item.picUrl">
            </div>
          </div>
            <!-- 文字描述 -->
            <div class="description">
                <p>{{item.name}}</p>
            </div>
            </router-link>
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getRecommendMusicPic } from '@/api/home'
import { reactive, onMounted } from 'vue'
export default {
  setup () {
    // 定义响应式的数据
    const state = reactive({
      // 推荐歌单一
      personalizeOne: [],
      // 推荐歌单二
      personalizeTwo: []
    })
    // 格式化数据
    // function changeCount (count) {
    //   if (count >= 100000000) {
    //     return (count / 100000000).toFixed(1) + '亿'
    //   } else if (count >= 10000) {
    //     return (count / 100000).toFixed(1) + '万'
    //   }
    // }
    onMounted(async () => {
      // 获取推荐歌单
      const res = await getRecommendMusicPic()
      state.personalizeOne = res.data.result.slice(0, 10)
      state.personalizeTwo = res.data.result.slice(10, 20)
      state.personalizeThree = res.data.result.slice(20, 30)
    })
    return { state }
  }
}
</script>
<style lang="less" scoped>
.recommendMusic {
  margin-bottom: 2rem;
    .van-swipe {
        height: 3.55rem;
        width: 10.5rem;
        padding: 0 0.1rem;
        .van-swipe__track {
           .van-swipe-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            .topPicInfo {
              position: relative;
                height: 2.15rem;
                .Playback {
                  color: #fff;
                  position: absolute;
                  display: flex;
                  align-items: center;
                  padding: .1rem;
                  right: 0;
                  top: 0;
                }
            }
            .imgDiv {
                width: 100%;
                img {
                    border-radius: .245rem;
                    width: 2.8rem;
                    height: 2.525rem;
                }
            }
            .description {
                margin-top: .4rem;
                padding: .1rem;
                p {
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }
        }

    }
}
</style>
