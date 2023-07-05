import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout/index.vue"
import Login from "@/views/Login/index.vue"
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"
import Test1 from "@/views/tailwindcssDemo/mini-project/Test1.vue";
import Test2 from "@/views/tailwindcssDemo/mini-project/Test2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '',
          component: Home
        },
        {
          path: '/category',
          component: Category
        },
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/test1',
      component: Test1
    },
    {
      path: '/test2',
      component: Test2
    },
  ]
})

export default router
