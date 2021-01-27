import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Layout from '@/components/Layout.vue'
import ManageProject from '@/views/ManageProject.vue'
import Summary from '@/views/Summary.vue'
import History from '@/views/History.vue'
import Transfer from '@/views/Transfer.vue'
import ManageSubProject from '@/views/ManageSubProject.vue'
import AdminLayout from '@/components/AdminLayout.vue'
import adminManagement from '@/views/adminManagement.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'Layout',
    component: Layout,
    children: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/manageproject',
      name: 'ManageProject',
      component: ManageProject,
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary,
    },
    {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/transfer',
    name: 'Tranfer',
    component: Transfer,
  },
  {
    path: '/managesubproject',
    name: 'ManageSubProject',
    component: ManageSubProject,
  },
  ],
},
{
  path: '/admin',
  name: 'adminLayout',
  component: AdminLayout,
  children: [
    {
      path: '/adminmanagement',
      name: 'adminManagement',
      component: adminManagement,
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
