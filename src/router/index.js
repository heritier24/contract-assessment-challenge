import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllUsers from '../views/AllUsers.vue'
import AllContracts from '../views/AllContract.vue'
import AllContractsDetails from '../views/AllContractsDetails.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NewContract from '../components/NewContract.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/all-users',
    name: 'AllUsers',
    component: AllUsers
  },
  {
    path: '/all-contract',
    name: 'AllContracts',
    component: AllContracts
  },
  {
    path: '/new-contract',
    name: 'NewContract',
    component: NewContract
  },
  {
    path: '/all-contract/:id',
    name: 'AllContractsDetails',
    component: AllContractsDetails
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
