import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  loading: true
};

// mutations
const mutations = {
  [types.UPDATE_LOADING](state,loading) {
    setTimeout(function () {
      state.loading=loading
    },1000)
  },
};

export default {
  state,
  mutations
}
