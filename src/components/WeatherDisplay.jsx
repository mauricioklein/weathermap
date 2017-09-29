import React from 'react';
import * as Weather from './weather/Weather'

import './WeatherDisplay.css'

const lookup = require('country-data').lookup

const WeatherDisplay = (props) => {
  const { data } = props

  const outline = () => {
    const { sys, coord } = data

    if (sys.country === undefined) {
      return `${coord.lat},${coord.lon}`
    } else {
      return lookup.countries({alpha2: sys.country})[0].name
    }
  }

  return (
    <div id="card" className="weater">
      <div className="city-selected">
        <article>
          <div className="info">
            <div className="city">{data.name} - {outline()}</div>
            <div className="description">{data.weather[0].description}</div>
            <div className="temp">{Math.round(data.main.temp)} °C</div>

            <div className="wind">
              <Weather.Wind />
              <span className="wind-speed">{data.wind.speed} km/h</span>
            </div>
          </div>

          <div className="icon">
            { Weather.mapWeatherIDtoIcon(data.weather[0].id) }
          </div>
        </article>
      </div>
    </div>
  )
}

export default WeatherDisplay
