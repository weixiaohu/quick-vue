import Vue from 'vue';
import App from './app.vue';
import router from './routes';
import store from './store'; 

// rem布局
import './assets/js/flex.js';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});