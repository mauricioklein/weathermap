// ./superagent-mock-config.js file

const geolocResponse = {
    "coord": {
        "lon": -16,
        "lat": -14
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 21.53,
        "pressure": 1029.61,
        "humidity": 100,
        "temp_min": 21.53,
        "temp_max": 21.53,
        "sea_level": 1029.59,
        "grnd_level": 1029.61
    },
    "wind": {
        "speed": 6.23,
        "deg": 104.501
    },
    "rain": {
        "3h": 0.54
    },
    "clouds": {
        "all": 80
    },
    "dt": 1506693348,
    "sys": {
        "message": 0.0019,
        "sunrise": 1506667678,
        "sunset": 1506711620
    },
    "id": 0,
    "name": "",
    "cod": 200
}

const cityResponse = {
    "coord": {
        "lon": 13.41,
        "lat": 52.52
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 17,
        "pressure": 1026,
        "humidity": 67,
        "temp_min": 17,
        "temp_max": 17
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.1,
        "deg": 100
    },
    "clouds": {
        "all": 0
    },
    "dt": 1506594000,
    "sys": {
        "type": 1,
        "id": 4892,
        "message": 0.0021,
        "country": "DE",
        "sunrise": 1506574995,
        "sunset": 1506617363
    },
    "id": 2950159,
    "name": "Berlin",
    "cod": 200
}

const rules = [
  {
    /**
     * regular expression of URL
     */
    pattern: 'http://api.openweathermap.org/data/2.5/weather(.*)',

    /**
     * returns the data
     *
     * @param match array Result of the resolution of the regular expression
     * @param params object sent by 'send' function
     * @param headers object set by 'set' function
     * @param context object the context of running the fixtures function
     */
    fixtures: function (match, params, headers, context) {
      // City search: success
      if (match[1] === '?q=Berlin%2CDE&units=metric&APPID=b433f7bbb7535c9a63909a7f9472b4a2') {
        return cityResponse
      }

      // Geoloc search: success
      if (match[1] === '?lat=10&lon=20&units=metric&APPID=b433f7bbb7535c9a63909a7f9472b4a2') {
        return geolocResponse
      }

      // City search: failure
      if (match[1] === '?q=Foo%2CBar&units=metric&APPID=b433f7bbb7535c9a63909a7f9472b4a2') {
        throw new Error(500);
      }

      // Geoloc search: failure
      if (match[1] === '?lat=Foo&lon=Bar&units=metric&APPID=b433f7bbb7535c9a63909a7f9472b4a2') {
        throw new Error(500);
      }
    },

    /**
     * returns the result of the GET request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    get: function (match, data) {
      return {
        body: data
      };
    }
  }
];

module.exports = {
  cityResponse: cityResponse,
  geolocResponse: geolocResponse,
  rules: rules
}
