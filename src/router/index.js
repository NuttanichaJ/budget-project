import Vue from 'vue'
import VueRouter from 'vue-router'


import Layout from '@/components/Layout.vue'
import ManageProject from '@/views/ManageProject.vue'
import Summary from '@/views/Summary.vue'
import History from '@/views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
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
