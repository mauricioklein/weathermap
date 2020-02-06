import request from 'superagent'
import localStorage from 'mock-local-storage'
import { getWeatherForGeoloc, getWeatherForCity } from '../get'
import * as apiMocks from '../../../test-utils/api-mocks'
import '../../../test-utils/custom-expectations'

describe('API', () => {
  var mock = null
  beforeEach(() => mock = require('superagent-mock')(request, apiMocks.rules))
  afterEach(() => {
    mock.unset()
    window.localStorage.clear()
  })

  describe('#getWeatherForCity', () => {
    it('should get result from API', () => {
      getWeatherForCity('Berlin', 'DE').then(body => {
        expect(body).toEqual(apiMocks.cityResponse)
        expect('Berlin,DE').toContainOnLocalStorage(apiMocks.cityResponse)
      })
    })

    it('should get result from local storage', () => {
      mock.unset()
      window.localStorage.setItem('Berlin,DE', JSON.stringify(apiMocks.cityResponse))

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
    it('should get result from API', () => {
      getWeatherForGeoloc(10, 20).then(body => {
        expect(body).toEqual(apiMocks.geolocResponse)
        expect('10,20').toContainOnLocalStorage(apiMocks.geolocResponse)
      })
    })

    it('should get result from local storage', () => {
      mock.unset()
      window.localStorage.setItem('10,20', JSON.stringify(apiMocks.geolocResponse))

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
