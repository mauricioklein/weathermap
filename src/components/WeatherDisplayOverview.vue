<template>
  <div class="city-selected">
    <article>
      <div class="info">
        <div class="city">{{ name }}</div>
        <div class="description">{{ description }}</div>
        <div class="temp">{{ roundedTemperature }} °C</div>

        <div class="wind">
          <Wind />
          <span>{{ speed }} km/h</span>
        </div>
      </div>

      <div class="icon">
        <WeatherIcon :weatherId="weatherId" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Wind from './weather/Wind.vue'
import WeatherIcon from './weather/WeatherIcon.vue'

export default Vue.extend({
  name: 'WeatherDisplayOverview',

  props: {
    name: String,
    description: String,
    temperature: Number,
    speed: Number,
    weatherId: Number
  },

  components: {
    Wind,
    WeatherIcon
  },

  computed: {
    roundedTemperature: function () {
      return Math.round(this.temperature)
    }
  }
})
</script>

<style scoped>
.city-selected {
  position: relative;
  overflow: hidden;
  min-height: 200px;
}

.info {
  margin-left: auto;
  margin-right: auto;
  color: white;
}

.city {
  font-size: 32px;
  text-transform: uppercase;
}

.description {
  font-size: 20px;
  margin-bottom: 10px;
}

.temp {
  font-size: 73px;
  font-weight: bold;
}

.wind {
  margin: 10px 0;
}

.wind svg {
  width: 18px;
  height: 18px;
  margin-right: 12px;
}

.wind span {
  font-size: 13px;
  text-transform: uppercase;
}

.icon {
  width: 120px;
  height: 120px;
  color: white;
  flex: 0 0 auto;
  align-self: center;

  overflow: visible;
}

svg {
  fill: white;
}
</style>
