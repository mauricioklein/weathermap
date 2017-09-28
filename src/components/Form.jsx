import React, { Component } from 'react'
import CityForm from './CityForm'
import GeolocForm from './GeolocForm'
import WeatherDisplay from './WeatherDisplay'
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
        }
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
        }
      )
  }

  render() {
    const { form, loaded, data } = this.state

    return (
      <div className="container col-sm-6 col-sm-offset-3">
        <div className="form-group">
          <div className="btn-group btn-group-lg">
            <button type="button" className="cityFormBtn btn btn-default" onClick={() => this.setActiveForm(CITY_FORM_ID)}  >City Form  </button>
            <button type="button" className="geolocFormBtn btn btn-default" onClick={() => this.setActiveForm(GEOLOC_FORM_ID)}>Geoloc Form</button>
          </div>
        </div>

        <CityForm   isVisible={form === CITY_FORM_ID}   searchCallback={this.triggerSearchByCity}   />
        <GeolocForm isVisible={form === GEOLOC_FORM_ID} searchCallback={this.triggerSearchByGeoloc} />

        { loaded && <WeatherDisplay data={data} /> }
      </div>
    )
  }
}

export default Form
