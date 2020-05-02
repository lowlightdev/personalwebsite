import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import NotFound from './components/NotFound.vue';
import Details from './components/Details.vue';
import 'nes.css/css/nes.css';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path:"/",name:'Home',component:Details },
    { path: '*', name: 'NotFound', component: NotFound }
  ]
})

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
