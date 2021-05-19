import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import MyAccount from '../views/MyAccount.vue'

import LogIn from '../views/Auth/LogIn.vue'
import Register from '../views/Auth/Register.vue'

import MyAccountRoutes from './myAccount'

import GettingStartedRoutes from './gettingStarted'
import GettingStarted from '../views/GettingStarted.vue'
import OtherPageOne from '../views/OtherPages/PageOne.vue'
import OtherPageTwo from '../views/OtherPages/PageTwo.vue'
const routes = [
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
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: 
      MyAccount,
    children: MyAccountRoutes,
  },
  {
    path:'/login',
    name:'LogIn',
    component: LogIn
  },
  {
    path:'/register',
    name:'Register',
    component: Register
  },
  {
    path:'/gettingStarted',
    name:'GettingStarted',
    component: GettingStarted,
    children: GettingStartedRoutes,
  },
  {
    path:'/otherPageOne',
    name:'OtherPageOne',
    component:OtherPageOne,
  },
  {
    path:'/otherPageTwo',
    name:'OtherPageTwo',
    component:OtherPageTwo,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
