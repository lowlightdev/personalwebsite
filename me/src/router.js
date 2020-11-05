
import NotFound from '@/components/NotFound.vue';
import Home from '@/components/Home.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path:"/",name:'Home',component:Home },
      { path: '*', name: 'NotFound', component: NotFound }
    ]
  })

export default router;