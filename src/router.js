
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Care from './views/Care.vue'
import Gallery from './views/Gallery.vue'

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
// router.beforeEach(function (to, _, next) {
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next('/');
//   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//     next('/care');
//   } else {
//     next();
//   }
// });
export default router