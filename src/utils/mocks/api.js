// ./superagent-mock-config.js file

const geolocResponse = {
  "coord": {
      "lon": 139,
      "lat": 35
  },
  "weather": [
      {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 25,
      "pressure": 1000,
      "humidity": 65,
      "temp_min": 25,
      "temp_max": 25
  },
  "visibility": 10000,
  "wind": {
      "speed": 4.6,
      "deg": 50
  },
  "clouds": {
      "all": 75
  },
  "dt": 1506591180,
  "sys": {
      "type": 1,
      "id": 7573,
      "message": 0.0026,
      "country": "JP",
      "sunrise": 1506544593,
      "sunset": 1506587523
  },
  "id": 1851632,
  "name": "Shuzenji",
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
