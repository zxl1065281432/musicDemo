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
    path: '/myLove',
    name: 'myLove',
    component: () => import('@/views/MyLoveMusic.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchPage.vue')
  },
  {
    path: '/playlistDetil',
    name: 'playlistDetil',
    component: () => import('@/views/PlayListDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
