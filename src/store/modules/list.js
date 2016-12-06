import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  data:[]
}

// mutations
const mutations = {
  [types.GET_LIST] (state, { result }) {
    state.data = result;
  }
}

export default {
  state,
  mutations
}
