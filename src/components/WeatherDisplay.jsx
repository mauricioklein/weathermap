import React from 'react';
import * as WeatherIcon from './weather/Icon'

import './WeatherDisplay.css'

const lookup = require('country-data').lookup

export const WeatherDisplay = ({data}) => {
  return (data === null) ? <NotFound /> : <Overview data={data} />
}

const Overview = ({data}) => (
  <div id="card" className="weater">
    <div className="city-selected">
      <article>
        <div className="info">
          <div className="city">{data.name} - {generateOutline(data)}</div>
          <div className="description">{data.weather[0].description}</div>
          <div className="temp">{Math.round(data.main.temp)} °C</div>

          <div className="wind">
            <Weather.Wind />
            <span className="wind-speed">{data.wind.speed} km/h</span>
          </div>
        </div>

        <div className="icon">
          { WeatherIcon.iconForWeatherID(data.weather[0].id) }
        </div>
      </article>
    </div>
  </div>
)

const NotFound = () => (
  <div id="card" className="weater">
    <div className="city-selected">
      <article>
        <div className="info">
          <div className="temp">Not Found</div>
        </div>
      </article>
    </div>
  </div>
)

const generateOutline = ({sys, coord}) => {
  if (sys.country === undefined) { return `${coord.lat},${coord.lon}` }
  else                           { return lookup.countries({alpha2: sys.country})[0].name }
}
