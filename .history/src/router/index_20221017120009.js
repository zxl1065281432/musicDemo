import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/myinfo',
    name: 'myinfo',
    component: () => import('@/views/MyInfo.vue')
  },
  {
    path: '/myLoveSong',
    name: 'myLoveSong',
    component: () => import('@/views/MyLoveMusic.vue')
    meta: { isShowBottom: true }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchPage.vue')
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
