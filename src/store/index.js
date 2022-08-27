
import { createStore } from 'vuex'

export default createStore({
  state: {
    crispa: 18,
    foetida: 5,
    gallery: [
      {
        title: '5 месяцев:',
        image: require('@/assets/g1.jpg')
      },
      {
        title: '2 недели:',
        image: require('@/assets/g2.jpg')
      },]
  },
  actions: {
    async loadOffers(context) {
      if (!context) {
        return;
      }

      context.commit('setOffers')
    }
  },
  mutations: {},
  getters: {
    crispa(state) {
      return state.crispa;
    },
    foetida(state) {
      return state.foetida;
    },
    gallery(state) {
      return state.gallery;
    },
    hasGallery(state) {
      return state.gallery && state.gallery.length > 0;
    },
  },
})