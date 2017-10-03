import React, { Component } from 'react'
import {
  FormSelector,
  CityForm,
  GeolocForm,
  WeatherDisplay
} from '.'
import {
  getWeatherForGeoloc,
  getWeatherForCity
} from '../api/open-weather-map/get'
import './Form.css'

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

    const isCityActive   = (form === CITY_FORM_ID)
    const isGeolocActive = (form === GEOLOC_FORM_ID)

    return (
      <div className="app container">
        <div className="col-sm-6">
          <FormSelector
            isCityActive={isCityActive}
            isGeolocActive={isGeolocActive}
            activateCityForm={() => this.setActiveForm(CITY_FORM_ID)}
            activateGeolocForm={() => this.setActiveForm(GEOLOC_FORM_ID)}
          />
          <CityForm   isVisible={isCityActive}   searchCallback={this.triggerSearchByCity}   />
          <GeolocForm isVisible={isGeolocActive} searchCallback={this.triggerSearchByGeoloc} />
        </div>

        <div className="col-sm-6">
          { loaded && <WeatherDisplay data={data} /> }
        </div>
      </div>
    )
  }
}

export default Form
