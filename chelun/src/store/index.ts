import Vue from 'vue'
import Vuex from 'vuex'
import left from './modules/left'
import TypeList from './modules/TypeList';
import CarImg from './modules/CarImg';

import active from './modules/active';
import carPrice from './modules/carPrice'
Vue.use(Vuex)
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
    CarImg,
    active,
    carPrice
  },
})
