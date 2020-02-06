<template>
  <ThunderCloud v-if="weatherIdBetween(200, 299)" />
  <RainCloud v-else-if="weatherIdBetween(300, 399)"/>
  <SnowCloud v-else-if="weatherIdBetween(600, 699)" />
  <WindyCloud v-else-if="weatherIdBetween(700, 799)" />
  <SunCloud v-else-if="weatherIdBetween(801, 809)" />
  <Sunshine v-else />
</template>

<script lang="ts">
import Vue from 'vue'
import ThunderCloud from './ThunderCloud.vue'
import RainCloud from './RainCloud.vue'
import SnowCloud from './SnowCloud.vue'
import WindyCloud from './WindyCloud.vue'
import SunCloud from './SunCloud.vue'
import Sunshine from './Sunshine.vue'

export default Vue.extend({
  name: 'WeatherIcon',

  props: {
    weatherId: Number
  },

  components: {
    ThunderCloud,
    RainCloud,
    SnowCloud,
    WindyCloud,
    SunCloud,
    Sunshine
  },

  methods: {
    weatherIdBetween: function (min, max) {
      return (min <= this.weatherId) && (this.weatherId <= max)
    }
  }
})
</script>
