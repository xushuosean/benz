import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Homes',
    component: Home,
    children: [
      {
        path: 'orientation',
        name: 'Orientation',
        component: () => import('../views/orientation.vue')
      },
      {
        path: 'backmsg',
        name: 'Backmsg',
        component: () => import('../views/backMsg.vue')
      },
      {
        path: 'change',
        name: 'Change',
        component: () => import('../views/change.vue')
      },
      {
        path: 'customer',
        name: 'Customer',
        component: () => import('../views/customer.vue')
      },
      {
        path: 'final',
        name: 'Final',
        component: () => import('../views/final.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
