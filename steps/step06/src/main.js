// Base
import Vue from 'vue'

// Routing
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// State management (Vuex)
import store from "./store";

// Application implementation
import App from './App.vue';
import Agenda from './components/Agenda.vue';

Vue.config.productionTip = false

// Routing
const routes = [
  { path: '/agenda/:seldate', component: Agenda },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
