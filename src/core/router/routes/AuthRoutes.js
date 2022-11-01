export default [
  {
    path: '/',
    name: 'landing-page',
    component: () => import('@/views/LandingDemo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Auth/Register.vue')
  }
]