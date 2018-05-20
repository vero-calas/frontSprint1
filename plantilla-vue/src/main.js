import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import doughChart from './doughChart.vue';
import trofeos from './trofeos.vue';
import uDeChile from './uDeChile.vue';
import VueResource from 'vue-resource';
import VueChart from 'vue-chart-js'
Vue.use(VueChart)
require("./style.scss");
import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/doughChart', component: doughChart},
    { path: '/trofeos', component: trofeos},
    { path: '/uDeChile', component: uDeChile}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)

})


