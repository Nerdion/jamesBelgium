
import MyAccountContent from '../views/Account/MyAccountContent.vue'
import PersonalInfo from '../views/Account/personalInfo.vue'
import Unkown1 from '../views/Account/unkown1.vue'
import Unkown2 from '../views/Account/unkown2.vue'
import Unkown3 from '../views/Account/unkown3.vue'
import Subscriptions from '../views/Account/subscriptions.vue'
import PaymentBillings from '../views/Account/PaymentBillings.vue'

const MyAccountRoutes = [
  {
    path:'',
    name:MyAccountContent,
    component: MyAccountContent
  },
  {
    path: 'profile',
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
]

export default MyAccountRoutes
