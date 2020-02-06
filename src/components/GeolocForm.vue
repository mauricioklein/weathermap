<template>
  <div class="form-horizontal">
    <!-- Latitude field -->
    <div class="form-group">
      <label class="control-label col-md-3">Latitude</label>
      <div class="col-md-9">
        <input
          type="number"
          class="form-control"
          v-model="latitude"
          placeholder="Enter latitude (e.g. 52.522392)"
        />
      </div>
    </div>

    <!-- Longitude field -->
    <div class="form-group">
      <label class="control-label col-md-3">Longitude</label>
      <div class="col-md-9">
        <input
          type="number"
          class="form-control"
          v-model="longitude"
          placeholder="Enter longitude (e.g. 13.412346)"
        />
      </div>
    </div>

    <!-- Submit button -->
    <div class="form-group">
      <div class="col-md-10 col-md-offset-2">
        <button class="btn btn-default" @click="searchCallback(latitude, longitude)">Search</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'GeolocForm',

  data: () => ({
    latitude: 0,
    longitude: 0
  }),

  props: {
    searchCallback: Function
  }
})
</script>
