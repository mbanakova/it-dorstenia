
import { createStore } from 'vuex'

export default createStore({
  state: {
    plants: {
      crispa: "",
      foetida: "",
    },
    gallery: [
      {
        title: 'Раздаётся рассада в инд. стаканчиках. Далее — примеры того, как они вырастут.',
        image: require('@/assets/g7.jpg')
      },
      {
        title: 'Совсем взрослые растения:',
        image: require('@/assets/g1.jpg')
      },
      {
        title: 'D. crispa, полугодовалая:',
        image: require('@/assets/g2.jpg')
      },
      {
        title: 'D. foetida, 9 месяцев:',
        image: require('@/assets/g3.jpg')
      },
      {
        title: 'D. foetida, цветочек с семенами:',
        image: require('@/assets/g4.jpg')
      },
      {
        title: 'D. foetida, 8 месяцев:',
        image: require('@/assets/g5.jpg')
      },
      {
        title: 'D. crispa, 1,5 месяца:',
        image: require('@/assets/g6.jpg')
      },
      {
        title: 'D. crispa, 2 недели от роду:',
        image: require('@/assets/g8.jpg')
      },
      {
        title: 'Бонусом — макушка крупным планом:',
        image: require('@/assets/g9.jpg')
      },

    ]
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