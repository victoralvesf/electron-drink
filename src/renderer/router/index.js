import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../views/Dashboard';
import Products from '../views/Products';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
