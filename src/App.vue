<template>
  <div class="app container">
    <center>
      <MainForm
        :searchByCityCallback="searchByCity"
        :searchByGeolocCallback="searchByGeoloc"
      />
    </center>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MainForm } from './components'
import WeatherStore from './store/weather'

import {
  getWeatherForGeoloc,
  getWeatherForCity
} from './api/open-weather-map/get'

enum ActiveForm { CITY, GEOLOC }

export default Vue.extend({
  name: 'app',

  components: {
    MainForm
  },

  methods: {
    searchByCity: async function (city: string, country: string) {
      try {
        const data = await getWeatherForCity(city, country)
        WeatherStore.commit('setSuccessData', data)
      } catch {
        WeatherStore.commit('setErrorData', {})
      }
    },

    searchByGeoloc: async function (lat: number, lng: number) {
      try {
        const data = await getWeatherForGeoloc(lat, lng)
        WeatherStore.commit('setSuccessData', data)
      } catch {
        WeatherStore.commit('setErrorData', {})
      }
    }
  }
})
</script>

<style>
body {
  background-color: #f2f2f2;
  padding: 20px 0;
}
</style>

<style scoped>
.app {
  text-align: center;
}
</style>
