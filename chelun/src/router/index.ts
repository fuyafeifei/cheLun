import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/carDetail',
      name: 'carDetail',
      component: () => import('@/views/CarLIstDetail.vue')
    },
    {
      path: '/img',
      name: 'CarImg',
      component: () => import('../views/CarImg.vue')
    },
    {
      path: '/color',
      name: 'CarColor',
      component: () => import('../views/CarColor.vue')
    }
  ]
})
