<template>
  <div class="weather-container">
    <WeatherDisplayOverview
      v-if="ok"
      :name="weatherInfo.cityName"
      :description="weatherInfo.description"
      :temperature="weatherInfo.temperature"
      :speed="weatherInfo.windSpeed"
      :weatherId="weatherInfo.weatherId"
    />
    <WeatherDisplayNone v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WeatherDisplayOverview from './WeatherDisplayOverview.vue'
import WeatherDisplayNone from './WeatherDisplayNone.vue'
import WeatherStore from '../store/weather'

import { Weather } from './types'

export default Vue.extend({
  name: 'WeatherDisplay',

  components: {
    WeatherDisplayOverview,
    WeatherDisplayNone
  },

  computed: {
    ok: function () {
      return WeatherStore.getters.ok
    },

    weatherInfo: function () {
      return WeatherStore.getters.info
    }
  }
})
</script>

<style scoped>
.weather-container {
  background: #3D6AA2;
  position: relative;
  padding: 10px 0;
  box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);
  transition: all 0.5s ease;
}
</style>
