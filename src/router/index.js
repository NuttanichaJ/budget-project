import Vue from 'vue'
import VueRouter from 'vue-router'
//import { createRouter, createWebHistory } from 'vue-router';
//import store from '@/store';

import Home from '@/views/Home.vue'
import Layout from '@/components/Layout.vue'
import CenterLayout from '@/components/CenterLayout.vue'
import ManageProjectC from '@/views/ManageProjectC.vue'
import ManageMainProjectB from '@/views/ManageMainProjectB.vue'
import ManageProjectB from '@/views/ManageProjectB.vue'
import History from '@/views/History.vue'
import Transfer from '@/views/Transfer.vue'
import ManageSubProject from '@/views/ManageSubProject.vue'
import AdminLayout from '@/components/AdminLayout.vue'
import adminManagement from '@/views/adminManagement.vue'
import SubSummary from '@/views/SubSummary.vue'
import Login from '@/views/Login.vue'
import Summary from '@/views/Summary.vue'
import DeanLayout from "@/components/DeanLayout"

Vue.use(VueRouter)

const routes = [
  {
    path: '/userbrance',
    name: 'Layout',
    component: Layout,
    children: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/manageprojectbrance',
      name: 'ManageProjectBrance',
      component: ManageProjectB,
    },
    {
      path: '/allsummary',
      name: 'Summary',
      component: Summary,
    },
    {
      path: '/subsummary',
      name: 'SubSummary',
      component: SubSummary,
    },
    // {
    //   path: '/summary',
    //   name: 'Summary',
    //   component: Summary,
    // },
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
    path: '/usercenter',
    name: 'CenterLayout',
    component: CenterLayout,
    children: [
    {
      path: '/homecenter',
      name: 'Homecenter',
      component: Home,
    },
    {
      path: '/manageprojectcenter',
      name: 'ManageProjectCenter',
      component: ManageProjectC,
    },
    {
      path: '/managemainprojectbrance',
      name: 'ManageMainProjectBrance',
      component: ManageMainProjectB,
    },
    {
      path: '/summarycenter',
      name: 'summarycenter',
      component: Summary,
    },
    {
      path: '/subsummarycenter',
      name: 'Subsummarycenter',
      component: SubSummary,
    },
    // {
    //   path: '/summary',
    //   name: 'Summary',
    //   component: Summary,
    // },
    {
    path: '/historycenter',
    name: 'Historycenter',
    component: History,
  },
  {
    path: '/transfercenter',
    name: 'Transfercenter',
    component: Transfer,
  },
  {
    path: '/managesubprojectcenter/:id',
    name: 'ManageSubProjectcenter',
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
    },
    
  ]
},
{
  path: '/dean',
  name: 'deanLayout',
  component: DeanLayout,
  children: [
    {
      path: '/summary',
      name: 'summary',
      component: Summary,
    },
  ]
},
{
  path: '/login',
  name: 'login',
  component: Login,
},
{ path: '*', redirect: '/login' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

export default router
