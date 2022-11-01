import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from './routes/AuthRoutes'
import AppRoutes from './routes/AppRoutes'

// import ExampleRoutes from './routes/ExampleRoutes'

export default createRouter({
  history: createWebHistory(),
  routes: [
    ...AppRoutes,
    ...AuthRoutes,
  ],
});