import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddDriver from '../views/AddDriver.vue'
import AddTeam from '../views/AddTeam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AddDriver',
    name: 'AddDriver',
    component: AddDriver
  },
  {
    path: '/AddTeam',
    name: 'AddTeam',
    component: AddTeam
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
