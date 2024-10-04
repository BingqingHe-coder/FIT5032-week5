import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuth } from '../router/auth'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import LogoutView from '@/views/LogoutView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
const routes = [
  {
    path:'/CountBookAPI',
    name:'CountBookAPI',
    component: CountBookAPI

  },
  {
    path:'/WeatherView',
    name:'WeatherView',
    component: WeatherView

  },
  {
    path:'/GetBookCount',
    name:'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
    
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
    
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
    
  },

  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true } 
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})




router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth()
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated.value) {
    next({ name: 'Login' })
  } else {
    next()
  }
})




export default router


