
import { createStore } from 'vuex'

export default createStore({
  state: {
    plants: {
      crispa: "",
      foetida: "",
    },
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
    async set(context, syncData) {
      const plants = syncData

      const response = await fetch('https://dorstenia-6af31-default-rtdb.firebaseio.com/plants.json', {
        method: 'PUT',
        body: JSON.stringify({
          ...plants
        })
      })
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }

      context.commit('sync', plants)
    },

    async get(context) {
      const response = await fetch('https://dorstenia-6af31-default-rtdb.firebaseio.com/plants.json')

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }
      const plants = {};
      plants.crispa = responseData.crispa;
      plants.foetida = responseData.foetida;

      context.commit("get", plants)
    },
  },
  mutations: {
    sync(state, payload) {
      state.crispa = payload.crispa;
      state.foetida = payload.foetida;
    },
    get(state, payload) {
      state.plants = payload;
    }
  },
  getters: {
    plants(state) {
      return state.plants;
    },
    gallery(state) {
      return state.gallery;
    },
    hasGallery(state) {
      return state.gallery && state.gallery.length > 0;
    },
  },
})