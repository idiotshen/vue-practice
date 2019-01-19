import Vue from 'vue';
import Router from 'vue-router';
import Login from '../view/Login';
import Home from '../view/home/Home.vue';
import WarehouseList from '../view/warehouseList/WarehouseList.vue';
import NewWarehouse from '../view/newWarehouse/NewWarehouse.vue';

Vue.use(Router);

export default new Router({
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
