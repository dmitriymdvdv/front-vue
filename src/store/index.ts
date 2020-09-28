import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: 'Bob Razowski',
      apiToken: '273b9080',
    },
    page: 1,
    filter: '',
  },
  mutations: {
    incrementPage(state) {
      state.page += 1;
    },
    changeFilter(state, filter: string) {
      state.filter = filter;
    },
  },
});
