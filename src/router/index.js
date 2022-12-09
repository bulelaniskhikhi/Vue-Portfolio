import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/LandingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
