import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingListView from '../views/ShopingListView.vue'
import ChildBedMenu from '../views/ChildBedMenu.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/childbedmenu',
      name: 'childbedmenu',
      component: ChildBedMenu
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/shoppinglist',
      name: 'shoppinglist',
      component: ShoppingListView
    }
  ]
})

export default router
