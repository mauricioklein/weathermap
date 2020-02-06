<template>
  <div class="form-group">
    <div class="btn-group btn-group-lg btn-group-justified">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-default active"
          :class="{ active: isCityActive }"
          @click="activateCityForm"
        >
          Search by City
        </button>
      </div>

      <div class="btn-group">
        <button
          type="button"
          class="btn btn-default active"
          :class="{ active: isGeolocActive }"
          @click="activateGeolocForm"
        >
          Search by City
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormSelector',

  props: {
    isCityActive: Boolean,
    isGeolocActive: Boolean,
    activateCityForm: Function,
    activateGeolocForm: Function
  }
})
</script>
