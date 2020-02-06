<template>
  <div>
    <div class="col-sm-6">
      <FormSelector
        :isCityActive="isCityActive"
        :isGeolocActive="isGeolocActive"
        :activateCityForm="activateCityForm"
        :activateGeolocForm="activateGeolocForm"
      />
      <CityForm v-show="isCityActive" :searchCallback="searchByCityCallback" />
      <GeolocForm v-show="isGeolocActive" :searchCallback="searchByGeolocCallback" />
    </div>

    <div class="col-sm-6">
      <WeatherDisplay :weather="weather" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FormSelector from './FormSelector.vue'
import CityForm from './CityForm.vue'
import GeolocForm from './GeolocForm.vue'
import WeatherDisplay from './WeatherDisplay.vue'

import { Weather } from './types'

export default Vue.extend({
  name: 'MainForm',

  components: {
    FormSelector,
    CityForm,
    GeolocForm,
    WeatherDisplay
  },

  props: {
    isCityActive: Boolean,
    isGeolocActive: Boolean,

    activateCityForm: Function,
    activateGeolocForm: Function,

    searchByCityCallback: Function,
    searchByGeolocCallback: Function,

    weather: Object as () => Weather
  }
})
</script>

<style scoped>
.app {
  text-align: center;
}
</style>
