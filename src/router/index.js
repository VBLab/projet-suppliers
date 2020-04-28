import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/suppliers',
    name: 'suppliers',
    component: () => import('@/components/SuppliersList.vue'),
  },
  {
    path: '/Map',
    name: 'Map',
    component: () => import('@/components/SuppliersMap.vue'),
  },
  {
    path: '/supplier',
    name: 'supplier',
    component: () => import('@/components/Supplier.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
