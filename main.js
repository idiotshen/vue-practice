// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Element from 'element-ui';
import VueParticles from 'vue-particles';
import App from './App';
import { router } from './router';
import 'element-ui/lib/theme-chalk/index.css';
import Mock from './mock/index';
import store from './store/index';

Vue.use(Element);
Vue.use(VueParticles);
Vue.config.productionTip = false;

Mock.mockData();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
