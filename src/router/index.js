import { createRouter, createWebHashHistory } from 'vue-router'
// createWebHistory
import { getItem } from '@/utils/storage'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    // 是否显示底部播放组件
    meta: { isShowBottom: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { isShowBottom: false }
  },
  {
    path: '/myinfo',
    name: 'myinfo',
    component: () => import('@/views/MyInfo.vue'),
    meta: { isShowBottom: false },
    beforeEnter (to, from, next) {
      if (getItem('USER_PROFILE') && getItem('_USER_TOKEN')) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/myLoveSong',
    name: 'myLoveSong',
    component: () => import('@/views/MyLoveMusic.vue'),
    meta: { isShowBottom: true }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchPage.vue'),
    meta: { isShowBottom: true }
  },
  {
    path: '/playListDetail',
    name: 'playListDetail',
    component: () => import('@/views/PlayListDetail.vue'),
    meta: { isShowBottom: true }
  },
  {
    path: '/comments',
    name: 'comments',
    component: () => import('@/views/Comments.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/News.vue'),
    children: [
      {
        path: 'newsHistory',
        component: () => import('@/views/NewsHistory.vue')
      },
      {
        path: 'newsList',
        component: () => import('@/views/NewsList.vue')
      }
    ]
  },
  {
    path: '/newsDetail',
    component: () => import('@/views/NewsDetail.vue')
  },
  {
    path: '/playlistComments',
    name: 'playlistComments',
    component: () => import('@/views/PlaylistComments.vue')
  }

]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
