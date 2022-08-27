
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
const Care = () => import('./views/Care')
const Gallery = () => import('./views/Gallery')

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/care',
      name: 'Care',
      component: Care
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
  ]
})

export default router