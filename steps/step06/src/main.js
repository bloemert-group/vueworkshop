// Base
import Vue from 'vue'

// Routing
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './routing';

// State management (Vuex)
import store from "./store";

// Application implementation
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
