import { getWeatherForGeoloc, getWeatherForCity } from '../get'

import request from 'superagent';
import * as apiMocks from '../../../utils/mocks/api'

describe('API', () => {
  var mock = null
  beforeEach(() => mock = require('superagent-mock')(request, apiMocks.rules))
  afterEach(() => mock.unset())

  describe('#getWeatherForCity', () => {
    it('should process success result', () => {
      getWeatherForCity('Berlin', 'DE').then(body => {
        expect(body).toEqual(apiMocks.cityResponse)
      })
    })

    it('should process failure result', () => {
      getWeatherForCity('Foo', 'Bar').then(() => {},
        err => expect(err).toEqual(Error(500))
      )
    })
  })

  describe('#getWeatherForGeoloc', () => {
    it('should process success result', () => {
      getWeatherForGeoloc(10, 20).then(body => {
        expect(body).toEqual(apiMocks.geolocResponse)
      })
    })

    it('should process failure result', () => {
      getWeatherForGeoloc('Foo', 'Bar').then(() => {},
        err => expect(err).toEqual(Error(500))
      )
    })
  })
})
