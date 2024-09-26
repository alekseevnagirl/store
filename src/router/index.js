import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/ShoppingCart.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
