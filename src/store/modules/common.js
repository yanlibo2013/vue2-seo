import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  device: null
}

// mutations
const mutations = {
  [types.GET_DEVICE_TYPE] (state, { device }) {
    state.device = device;
  },

}

export default {
  state,
  mutations
}
