import Vue from 'vue';
import App from './app.vue';
import router from './routes';
import store from './store'; 
import filters from './libs/filters';

// rem布局
import './assets/js/flex.js';

// 注册filter
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});