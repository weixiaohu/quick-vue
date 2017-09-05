export default {
    path: '/home',
    name: 'home',
    alias: '/',
    component: resolve => require(['@/views/home'], resolve)
}