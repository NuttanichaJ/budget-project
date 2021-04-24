import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueApexCharts from 'vue-apexcharts'
import VueSimpleAlert from "vue-simple-alert";
import VueTabulator from 'vue-tabulator';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { LoaderPlugin } from 'vue-google-login';
import VeeValidate from 'vee-validate';


library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false
Vue.use(VueSimpleAlert);
Vue.use(VueTabulator);

Vue.use(LoaderPlugin, {
  client_id: '739770244137-b1d92li2tcs044jsj49ck7qmvbnchr9c.apps.googleusercontent.com',
});

Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
