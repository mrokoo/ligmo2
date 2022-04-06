
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

router.beforeEach((to, from, next) => { // 路由守卫，如果不存在token则跳转至登入页。
  //打印来的路径和去的路径
  console.log(to.path + "  from:" + from.fullPath)
  //对于登录页面不拦截
  if (to.path === '/') {
    // 接下来的函数
    next();
  } else {
    //用户访问认证后页面时 必须校验用户信息是否存在，不存在去登陆页
    const token = localStorage.getItem('token')
    // console.log(localStorage.getItem('token'))
    if (token) {
      next()
    } else {
      next('/')
    }
  }
});

export default router
