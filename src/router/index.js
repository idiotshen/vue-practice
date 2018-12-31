import Vue from 'vue';
import Router from 'vue-router';
import Login from '../view/Login';
import Home from '../view/home/Home.vue';
import VendorList from '../view/vendorList/vendorList.vue';
import NewVendor from '../view/newVendor/NewVendor.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/index/vendor-list',
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'vendor-list',
          component: VendorList,
        },
        {
          path: 'new-vendor',
          component: NewVendor,
        },
      ],
    },
  ],
});
