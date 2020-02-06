<template>
  <div class="weather-container">
    <WeatherDisplayOverview
      v-if="validData"
      :name="weather.data.name"
      :description="weather.data.weather[0].description"
      :temperature="weather.data.main.temp"
      :speed="weather.data.wind.speed"
      :weatherId="weather.data.weather[0].id"
    />
    <WeatherDisplayNone v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WeatherDisplayOverview from './WeatherDisplayOverview.vue'
import WeatherDisplayNone from './WeatherDisplayNone.vue'

import { Weather } from './types'

export default Vue.extend({
  name: 'WeatherDisplay',

  props: {
    weather: Object as () => Weather
  },

  components: {
    WeatherDisplayOverview,
    WeatherDisplayNone
  },

  computed: {
    validData: function () {
      // @ts-ignore
      return this.weather.loaded
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
