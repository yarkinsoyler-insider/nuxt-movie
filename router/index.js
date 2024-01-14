import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import movieDetail from '../views/movieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movieDetail',
    name: 'movieDetail',
    component: movieDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
