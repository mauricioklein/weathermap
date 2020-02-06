<template>
  <div class="form-group">
    <div class="btn-group btn-group-lg btn-group-justified">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-default active"
          :class="{ active: isCityFormActive }"
          @click="switchToCityForm"
        >
          Search by City
        </button>
      </div>

      <div class="btn-group">
        <button
          type="button"
          class="btn btn-default active"
          :class="{ active: isGeolocFormActive }"
          @click="switchToGeolocForm"
        >
          Search by Geolocation
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UIStore, { FormType } from '../store/ui'

export default Vue.extend({
  name: 'FormSelector',

  computed: {
    isCityFormActive: () => (UIStore.state.activeScreen === FormType.CITY),
    isGeolocFormActive: () => (UIStore.state.activeScreen === FormType.GEOLOC)
  },

  methods: {
    switchToCityForm: () => { UIStore.commit('setActiveScreen', FormType.CITY) },
    switchToGeolocForm: () => { UIStore.commit('setActiveScreen', FormType.GEOLOC) }
  }
})
</script>
