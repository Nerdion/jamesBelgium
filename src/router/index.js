import { createRouter, createWebHistory } from 'vue-router'

//import MyAccountRoutes from './myAccount'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import MyAccount from '../views/MyAccount.vue'
import PersonalInfo from '../views/Account/personalInfo.vue'
import Unkown1 from '../views/Account/unkown1.vue'
import Unkown2 from '../views/Account/unkown2.vue'
import Unkown3 from '../views/Account/unkown3.vue'
import Subscriptions from '../views/Account/subscriptions.vue'
import PaymentBillings from '../views/Account/PaymentBillings.vue'

// const MyAccountRoutes = [
// ]

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
    children: [
      {
        path: '/myaccount/profile',
        name: 'PersonalInfo',
        component: PersonalInfo
      },
      {
        path: 'unkown1',
        name: 'Unkown1',
        component: Unkown1
      },
      {
        path: 'unkown2',
        name: 'Unkown2',
        component: Unkown2
      },
      {
        path: 'unkown3',
        name: 'Unkown3',
        component: Unkown3
      },
      {
        path: 'subscriptions',
        name: 'Subscriptions',
        component: Subscriptions
      },
      {
        path: 'paymentBillings',
        name: 'PaymentBillings',
        component: PaymentBillings
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
