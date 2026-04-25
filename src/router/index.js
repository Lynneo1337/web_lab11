import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/lab7',
      name: 'lab7',
      component: () => import('../views/LabWork7.vue')
    },
    {
      path: '/lab8',
      name: 'lab8',
      component: () => import('../views/LabWork8.vue')
    },
    {
      path: '/lab9',
      name: 'lab9',
      component: () => import('../views/LabWork9.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router