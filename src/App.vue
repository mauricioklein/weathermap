<template>
  <div class="app container">
    <center>
      <MainForm
        :isCityActive="isCityActive"
        :isGeolocActive="isGeolocActive"
        :activateCityForm="activateCityForm"
        :activateGeolocForm="activateGeolocForm"
        :searchByCityCallback="searchByCity"
        :searchByGeolocCallback="searchByGeoloc"
        :weather="weather"
      />
    </center>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MainForm } from './components'

import {
  getWeatherForGeoloc,
  getWeatherForCity
} from './api/open-weather-map/get'

enum ActiveForm { CITY, GEOLOC }

export default Vue.extend({
  name: 'app',

  data: () => ({
    activeForm: ActiveForm.CITY,
    weather: {
      loaded: false,
      data: {}
    }
  }),

  components: {
    MainForm
  },

  computed: {
    isCityActive: function () { return this.activeForm === ActiveForm.CITY },
    isGeolocActive: function () { return this.activeForm === ActiveForm.GEOLOC }
  },

  methods: {
    activateCityForm: function () { this.activeForm = ActiveForm.CITY },
    activateGeolocForm: function () { this.activeForm = ActiveForm.GEOLOC },

    searchByCity: async function (city: string, country: string) {
      try {
        const response = await getWeatherForCity(city, country)
        this.weather = {
          loaded: true,
          data: response
        }
      } catch {
        this.weather = {
          loaded: false,
          data: {}
        }
      }
    },

    searchByGeoloc: async function (lat: number, lng: number) {
      try {
        const response = await getWeatherForGeoloc(lat, lng)
        this.weather = {
          loaded: true,
          data: response
        }
      } catch {
        this.weather = {
          loaded: false,
          data: {}
        }
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
