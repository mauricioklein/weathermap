<template>
  <div>
    <div class="col-sm-6">
      <FormSelector />
      <CityForm v-show="isCityFormActive" :searchCallback="searchByCityCallback" />
      <GeolocForm v-show="isGeolocFormActive" :searchCallback="searchByGeolocCallback" />
    </div>

    <div class="col-sm-6">
      <WeatherDisplay />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FormSelector from './FormSelector.vue'
import CityForm from './CityForm.vue'
import GeolocForm from './GeolocForm.vue'
import WeatherDisplay from './WeatherDisplay.vue'

import UIStore, { FormType } from '../store/ui'

export default Vue.extend({
  name: 'MainForm',

  components: {
    FormSelector,
    CityForm,
    GeolocForm,
    WeatherDisplay
  },

  computed: {
    isCityFormActive: () => (UIStore.state.activeScreen === FormType.CITY),
    isGeolocFormActive: () => (UIStore.state.activeScreen === FormType.GEOLOC)
  },

  props: {
    searchByCityCallback: Function,
    searchByGeolocCallback: Function
  }
})
</script>

<style scoped>
.app {
  text-align: center;
}
</style>
