/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';
import Login from '../view/Login';
import Home from '../view/home/Home.vue';
import WarehouseList from '../view/warehouseList/WarehouseList.vue';
import NewWarehouse from '../view/newWarehouse/NewWarehouse.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login,
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
          path: 'new-warehouse',
          component: NewWarehouse,
        },
      ],
    },
  ],
});

const EXCLUDE_ROUTER = ['/login'];

router.beforeEach((to, from, next) => {
  if (Cookies.get('Token') || EXCLUDE_ROUTER.includes(to.path)) {
    next();
  } else {
    next('/login');
  }
});

export { router };
