export default [
  {
    path: '/about',
    component: resolve =>require(['components/about/index.vue'], resolve)
    //component: require('components/about/index.vue'),
  }
];
