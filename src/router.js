import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import("./demo/Home.vue"),
  },

  {
    path: '*',
    name: 'notFound',
    component: () => import('./demo/NotFound'),
  }
]

const router = new VueRouter({
  base: 'mevcl',
  routes: routes
})

export default router