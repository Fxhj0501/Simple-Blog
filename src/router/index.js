import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import UserList from '../views/UserList';
import UserProfile from '../views/UserProfile';
import NotFound from '../views/NotFound';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/loginview',
    name: 'loginview',
    component: LoginView
  },
  {
    path: '/registerview',
    name: 'registerview',
    component: RegisterView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
