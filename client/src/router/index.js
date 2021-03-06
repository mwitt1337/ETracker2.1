import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Callback from '@/components/Callback.vue'
import AdminDistricts from '@/components/AdminDistricts.vue'
import AddBills from '@/components/AddBills.vue'
import AdminMeters from '@/components/AdminMeters.vue'
import AdminUsers from '@/components/AdminUsers.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/AdminDistricts',
      name: 'AdminDistricts',
      component: AdminDistricts
    },
    {
      path: '/AdminMeters',
      name: 'AdminMeters',
      component: AdminMeters
    },
    {
      path: '/AddBills',
      name: 'AddBills',
      component: AddBills
    },
    {
      path: '/AdminUsers',
      name: 'AdminUsers',
      component: AdminUsers
    }
  ]
})

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  if (to.name === 'callback') { // check if "to"-route is "callback" and allow access
    next()
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
    next()
  } else { // trigger auth0 login
    router.app.$auth.login()
  }
})

export default router
