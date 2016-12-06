import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'

import ElementUI from 'element-ui'
import './assets/css/ele-cy-theme.css'
Vue.use(ElementUI)

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);


new Vue({
  store,
  router,
  ...App
}).$mount('#app');
