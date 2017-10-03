import request from 'superagent';
import * as Store from './storage'

export const getWeatherForGeoloc = (lat, lng) => {
  const storedResult = Store.lookupGeoloc(lat, lng)
  return (storedResult != null) ? Promise.resolve(storedResult) : fetchGeolocAndStore(lat, lng)
}

export const getWeatherForCity = (city, country) => {
  const storedResult = Store.lookupCity(city, country)
  return (storedResult != null) ? Promise.resolve(storedResult) : fetchCityAndStore(city, country)
}

const fetchCityAndStore = (city, country) => {
  return new Promise((resolve, reject) => {
    request
      .get('http://api.openweathermap.org/data/2.5/weather')
      .query({
        q: `${city},${country}`,
        units: 'metric',
        APPID: 'b433f7bbb7535c9a63909a7f9472b4a2'
      })
      .end((err, res) => {
        if (err) { reject (err) }
        else {
          Store.storeCity(city, country, res.body)
          resolve(res.body)
        }
      })
  })
}

const fetchGeolocAndStore = (lat, lng) => {
  return new Promise((resolve, reject) => {
    request
      .get('http://api.openweathermap.org/data/2.5/weather')
      .query({
        lat: lat,
        lon: lng,
        units: 'metric',
        APPID: 'b433f7bbb7535c9a63909a7f9472b4a2'
      })
      .end((err, res) => {
        if (err) { reject (err) }
        else {
          Store.storeGeoloc(lat, lng, res.body)
          resolve(res.body)
        }
      })
  })
}
