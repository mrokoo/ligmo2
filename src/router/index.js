
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('@/views/welcome.vue'),
  },

  {
    path: '/:user(\\d+)',
    component: () => import('@/views/TheApp.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/home.vue'),
      },
      {
        path: 'home',
        component: () => import('@/views/home.vue'),
      },
      {
        path: 'kanban',
        component: () => import('@/views/kanban.vue')
      },
      {
        path: 'statistics',
        component: () => import('@/views/statistic.vue')
      },
      {
        path: 'setting',
        component: () => import('@/views/setting.vue')
      },
    ]
  },
  {
    path:'/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
