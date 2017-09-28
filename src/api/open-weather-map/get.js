import request from 'superagent';

export const getWeatherForCity = (city, country) => {
  return new Promise((resolve, reject) => {
    request
      .get('http://api.openweathermap.org/data/2.5/weather')
      .query({
        q: `${city},${country}`,
        units: 'metric',
        APPID: 'b433f7bbb7535c9a63909a7f9472b4a2'
      })
      .end((err, res) => {
        if (err) { reject (err)      }
        else     { resolve(res.body) }
      })
  })
}

export const getWeatherForGeoloc = (lat, lng) => {
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
        if (err) { reject (err)      }
        else     { resolve(res.body) }
      })
  })
}
