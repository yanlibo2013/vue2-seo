import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from '../plugins/logger'

import  common from "./modules/common";
import  list from "src/store/modules/list";
import  loading from 'src/store/modules/loading'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 1;



export default new Vuex.Store({
  actions,
  getters,
  modules: {
    common,
    list,
    loading
  },
  /*strict: debug,*/
  plugins: debug ? [createLogger()] : []
})
