// 不同模块应代码分离
import homeRoutes from './home';
import userRoutes from './user';
import aboutRoutes from './about';

const allRoutes = [
  ...homeRoutes,
  ...userRoutes,
  ...aboutRoutes
];

export default [
  // index
  {
    path: '/',
    component: require('components/home/index.vue'),
    children: [
    ]
  },
  // others
  ...allRoutes,
  // 404
  /*{
    path: '*',
    component: require('components/not-found.vue')
  }*/
];
