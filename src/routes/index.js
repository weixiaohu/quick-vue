import Vue from 'vue';
import Router from 'vue-router';
import homeRouter from './home';
import aboutRouter from './about';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        homeRouter,
        aboutRouter
    ]
})