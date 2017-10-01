import React, { Component } from 'react'
import FormSelector from './FormSelector'
import CityForm from './CityForm'
import GeolocForm from './GeolocForm'
import { WeatherDisplay } from './WeatherDisplay'
import {
  getWeatherForGeoloc,
  getWeatherForCity
} from '../api/open-weather-map/get'

const CITY_FORM_ID = 'city'
const GEOLOC_FORM_ID = 'geoloc'

class Form extends Component {
  constructor(props) {
    super(props)

    this.setActiveForm         = this.setActiveForm.bind(this)
    this.triggerSearchByGeoloc = this.triggerSearchByGeoloc.bind(this)
    this.triggerSearchByCity   = this.triggerSearchByCity.bind(this)

    this.state = {
      form: CITY_FORM_ID,
      loaded: false,
      data: {}
    }
  }

  setActiveForm(form) {
    this.setState({
      form: form
    })
  }

  triggerSearchByCity(city, country) {
    getWeatherForCity(city, country)
      .then(
        response => {
          this.setState({
            loaded: true,
            data: response
          })
        },
        error => this.setState({
          loaded: true,
          data: null
        })
      )
  }

  triggerSearchByGeoloc(lat, lng) {
    getWeatherForGeoloc(lat, lng)
      .then(
        response => {
          this.setState({
            loaded: true,
            data: response
          })
        },
        error => this.setState({
          loaded: true,
          data: null
        })
      )
  }

  render() {
    const { form, loaded, data } = this.state

    return (
      <div className="container">
        <div className="col-sm-6">
          <FormSelector
            activateCityForm={() => this.setActiveForm(CITY_FORM_ID)}
            activateGeolocForm={() => this.setActiveForm(GEOLOC_FORM_ID)}
          />
          <CityForm   isVisible={form === CITY_FORM_ID}   searchCallback={this.triggerSearchByCity}   />
          <GeolocForm isVisible={form === GEOLOC_FORM_ID} searchCallback={this.triggerSearchByGeoloc} />
        </div>

        <div className="col-sm-6">
          { loaded && <WeatherDisplay data={data} /> }
        </div>
      </div>
    )
  }
}

export default Form
