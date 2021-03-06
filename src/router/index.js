import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skillset from '../views/Skillset.vue'
import Works from '../views/Works.vue'
import Show from '../views/Show.vue'
import Contact from '../views/Contact.vue'
import Single from '../views/Single.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/single',
    name: 'Single',
    component: Single
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skillset',
    name: 'Skillset',
    component: Skillset
  },
  {
    path: '/Works',
    name: 'Works',
    component: Works
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
