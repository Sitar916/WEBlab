import { createStore } from "vuex";
import Model from "../model/model.js";

export default createStore({
  state: {
    model: new Model(),
  },
  mutations: {
    CALC(state, value) {
      state.model.calc(value);
    },
    CLEAR(state) {
      state.model.clearHistory();
    },
    LOAD(state) {
      state.model.getHistoryFromServer();
    },
  },
  actions: {
    CALC({ commit }, value) {
      commit("CALC", value);
    },
    CLEAR({ commit }) {
      commit("CLEAR");
    },
    LOAD({ commit }) {
      commit("LOAD");
    },
  },
  modules: {},
});
