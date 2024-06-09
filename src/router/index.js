import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import UsersPage from '../views/UsersPage.vue';
import OrdersPage from '../views/OrdersPage.vue';
import ProductsPage from '../views/ProductsPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/users',
    name: 'UsersPage',
    component: UsersPage,
  },
  {
    path: '/orders',
    name: 'OrdersPage',
    component: OrdersPage,
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
