import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum FormType { CITY, GEOLOC }

export default new Vuex.Store({
  state: {
    activeScreen: FormType.CITY
  },

  mutations: {
    setActiveScreen: function (state, activeScreen: FormType) {
      state.activeScreen = activeScreen
    }
  }
})
