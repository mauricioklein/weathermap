import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum DataStatus { PENDING, SUCCESS, ERROR }

export default new Vuex.Store({
  state: {
    data: {
      status: DataStatus.PENDING,
      info: {}
    }
  },

  getters: {
    ok: state => (state.data.status === DataStatus.SUCCESS),
    info: state => (state.data.info)
  },

  mutations: {
    setSuccessData: (state, info) => {
      state.data = {
        ...state.data,
        status: DataStatus.SUCCESS,
        info: {
          cityName: info.name,
          description: info.weather[0].description,
          temperature: info.main.temp,
          windSpeed: info.wind.speed,
          weatherId: info.weather[0].id
        }
      }
    },

    setErrorData: (state, data) => {
      state.data = {
        ...state.data,
        status: DataStatus.ERROR,
        info: {}
      }
    }
  }
})
