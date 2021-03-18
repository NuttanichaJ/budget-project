import Vue from 'vue'
import VueRouter from 'vue-router'
//import { createRouter, createWebHistory } from 'vue-router';
//import store from '@/store';

import Home from '@/views/Home.vue'
import Layout from '@/components/Layout.vue'
import ManageProjectC from '@/views/ManageProjectC.vue'
import ManageProjectB from '@/views/ManageProjectB.vue'
import History from '@/views/History.vue'
import Transfer from '@/views/Transfer.vue'
import ManageSubProject from '@/views/ManageSubProject.vue'
import AdminLayout from '@/components/AdminLayout.vue'
import adminManagement from '@/views/adminManagement.vue'
import AllSummary from '@/views/AllSummary.vue'
import SubSummary from '@/views/SubSummary.vue'
import Login from '@/views/Login.vue'

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
      path: '/manageprojectcenter',
      name: 'ManageProjectCenter',
      component: ManageProjectC,
    },
    {
      path: '/manageprojectbrance',
      name: 'ManageProjectBrance',
      component: ManageProjectB,
    },
    {
      path: '/allsummary',
      name: 'AllSummary',
      component: AllSummary,
    },
    {
      path: '/subsummary',
      name: 'SubSummary',
      component: SubSummary,
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
    path: '/managesubproject/:id',
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
},
{
  path: '/login',
  name: 'login',
  component: Login,

}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
