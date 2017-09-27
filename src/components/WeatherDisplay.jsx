import React from 'react';
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
            <div className="night">Night - 22:07 PM</div>
            <div className="temp">{data.main.temp} °C</div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default WeatherDisplay
