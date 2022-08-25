
import { createStore } from 'vuex'

export default createStore({
  state: {
    crispa: 20,
    foetida: 5
  },
  mutations: {},
  actions: {},
  getters: {
    crispa(state) {
      return state.crispa;
    },
    foetida(state) {
      return state.foetida;
    },
  },
})