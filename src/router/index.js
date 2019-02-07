/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';
import Login from '../view/Login';
import Home from '../view/home/Home.vue';
import WarehouseList from '../view/warehouseList/WarehouseList.vue';
import ProductList from '../view/productList/ProductList.vue';
import Error from '../view/error/Error.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/error',
      component: Error,
    },
    {
      path: '/',
      redirect: '/home/warehouse-list',
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'warehouse-list',
          component: WarehouseList,
        },
        {
          path: 'product-list',
          component: ProductList,
        },
      ],
    },
  ],
});

const EXCLUDE_ROUTER = ['/login', '/error'];

router.beforeEach((to, from, next) => {
  console.log(Cookies.get('token'));
  if (Cookies.get('token') || EXCLUDE_ROUTER.includes(to.path)) {
    next();
  } else {
    next('/login');
  }
});

export { router };
