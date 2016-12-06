import Vue from 'vue'
import Vuex from 'vuex'

import productListStore from './modules/productListStore'
import userInfoStore from './modules/userInfoStore'
import categoryStore from './modules/categoryStore'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
	    productListStore,
	    userInfoStore,
	    categoryStore
	},
});

export default store