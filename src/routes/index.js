import Vue from 'vue';
import VueRouter from 'vue-router';
import routesMap from './map/'; // 路由映射
/*import store from 'src/store/index'*/

import {setTitle} from 'src/plugins/util';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routesMap
});

router.beforeEach((to, from, next) => {
  //store.dispatch("updateLoading",true);

  /*if(to.path=="/"){
    //document.title="home";
    //document.getElementsByTagName('title')[0].innerHTML="home"
    setTitle("home");
  }

  if(to.path=="/user"){
    //document.title="user";
    //document.getElementsByTagName('title')[0].innerHTML="user";
    setTitle("user");
  }*/

  next()
})

export default router;
