import Vue from 'vue'
import Vuex from 'vuex'
import left from './modules/left'
Vue.use(Vuex)
import TypeList from './modules/TypeList';
import CarImg from './modules/CarImg';

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    TypeList,
    left,
    CarImg
  },
})
