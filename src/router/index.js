import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Teacher from '../views/Teacher.vue'
import News from '../views/News.vue'
import Login from '../views/Login.vue'
import VIP from '../views/VIP.vue'
import Certificate from '../views/Certificate.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'book',
        component: Book
      },
      {
        path: 'teacher',
        component: Teacher
      },
      {
        path: 'news',
        component: News
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      },
      {
        path: 'vip',
        component: VIP
      },
      {
        path: 'certificate',
        component: Certificate
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
