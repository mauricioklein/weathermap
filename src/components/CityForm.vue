<template>
  <div class="form-horizontal">
    <!-- City field -->
    <div class="form-group">
      <label class="control-label col-md-3">City</label>
      <div class="col-md-9">
        <input
          type="text"
          class="form-control"
          v-model="city"
          placeholder="Enter city (e.g. London)"
        />
      </div>
    </div>

    <!-- Country field -->
    <div class="form-group">
      <label class="control-label col-md-3">Country</label>
      <div class="col-md-9">
        <Countries :onChange="updateCountry" />
      </div>
    </div>

    <!-- Submit button -->
    <div class="form-group">
      <div class="col-md-10 col-md-offset-2">
        <button class="btn btn-default" @click="search">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Countries from './Countries.vue'

export default Vue.component('city-form', {
  name: 'CityForm',

  components: {
    Countries
  },

  data: () => ({
    city: '',
    country: ''
  }),

  props: {
    searchCallback: Function
  },

  methods: {
    search: function () {
      if (!this.hasInvalidFields()) {
        this.searchCallback(this.city, this.country)
      }
    },

    hasInvalidFields: function () {
      return (this.city === '' || this.country === '')
    },

    updateCountry: function (ev) {
      this.country = ev.target.value
    }
  }
})
</script>
