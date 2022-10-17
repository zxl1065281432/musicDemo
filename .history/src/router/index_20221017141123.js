import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

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
    meta: { isShowBottom: false }
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
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory()
  routes
})

export default router
