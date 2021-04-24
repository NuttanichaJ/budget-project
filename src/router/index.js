import Vue from 'vue'
import VueRouter from 'vue-router'
//import { createRouter, createWebHistory } from 'vue-router';
//import store from '@/store';

import Home from '@/views/Home.vue'
import BranchLayout from '@/components/BranchLayout.vue'
import CenterLayout from '@/components/CenterLayout.vue'
import ManageProjectC from '@/views/ManageProjectC.vue'
import ManageMainProjectB from '@/views/ManageMainProjectB.vue'
import ManageProjectB from '@/views/ManageProjectB.vue'
import History from '@/views/History.vue'
import Transfer from '@/views/Transfer.vue'
import ManageSubProject from '@/views/ManageSubProject.vue'
import AdminLayout from '@/components/AdminLayout.vue'
import adminManagement from '@/views/adminManagement.vue'
// import SubSummary from '@/views/SubSummary.vue'
import Login from '@/views/Login.vue'
import Summary from '@/views/Summary.vue'
import SummaryBranch1 from '@/views/SummaryBranch1.vue'
import DeanLayout from "@/components/DeanLayout.vue"
import store from "@/store/index.js"

Vue.use(VueRouter)

const routes = [
  // User Branch
  {
    path: '/userbranch',
    name: 'BranchLayout',
    component: BranchLayout,
    // meta: { requiresLogin: true },
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/manageprojectbranch',
        name: 'ManageProjectBranch',
        component: ManageProjectB,
      },
      {
        path: '/allsummary',
        name: 'Summary',
        component: Summary,
      },
      {
        path: '/summary',
        name: 'SummaryBranch',
        component: SummaryBranch1,
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
    beforeEnter: (to, from, next) => {
      const permission_id = store.state.user.permission
      const lastRouteName = localStorage.getItem('last_route');

      // console.log(lastRouteName)
      if(permission_id != 'สาขาวิชา'){
        next(lastRouteName)
      }else{
        next();
      }
    }
  },

  // User Center
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
        path: '/managemainprojectbranch',
        name: 'ManageMainProjectBranch',
        component: ManageMainProjectB,
      },
      {
        path: '/summarycenter',
        name: 'summarycenter',
        component: Summary,
        
      },
      {
        path: '/subsummary/:id',
        name: 'SubSummary',
        component: SummaryBranch1,
      },
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
    beforeEnter: (to, from, next) => {
      const permission_id = store.state.user.permission
      const lastRouteName = localStorage.getItem('last_route');

      // console.log(lastRouteName)
      if(permission_id != 'ส่วนกลาง'){
        next(lastRouteName)
      }else{
        next();
      }
    }

  },

  // Admin
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
      
    ],
    beforeEnter: (to, from, next) => {
      const permission_id = store.state.user.permission
      const lastRouteName = localStorage.getItem('last_route');

      // console.log(lastRouteName)
      if(permission_id != 'admin'){
        next(lastRouteName)
      }else{
        next();
      }
    }
  
  },

  // Dean
  {
    path: '/dean',
    name: 'deanLayout',
    component: DeanLayout,
    children: [
      {
        path: '/allsummaryDean',
        name: 'allSummary',
        component: Summary,
      },
      {
        path: '/subSummaryDean',
        name: 'summary',
        component: SummaryBranch1,
      },
    ],
    beforeEnter: (to, from, next) => {
      const permission_id = store.state.user.permission
      const lastRouteName = localStorage.getItem('last_route');
      // console.log(permission_id)
      // console.log(lastRouteName)
      if(permission_id != 'ผู้บริหาร'){
        next(lastRouteName)
      }else{
        next();
      }
    }
  
  },

  // login
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
  window.previousUrl = from.path
  if (authRequired && !loggedIn) {
     next('/login');
  }
  next();
  // else{
  //   var permission_id = store.state.user.permission;
  //   if (permission_id == "admin"){
  //       next({name: 'adminLayout'})
  //   }
    
  // }
})
router.afterEach((to) => {
  localStorage.setItem('last_route', to.path);

})


export default router
