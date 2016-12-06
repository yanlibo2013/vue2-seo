export default [
  {
    path: '/user',
    component: resolve =>require(['components/user/index.vue'], resolve)//webpack 按需加载
    //component: require('components/user/index.vue'),
  }
];
