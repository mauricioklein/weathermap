import { getWeatherForGeoloc, getWeatherForCity } from '../get'

describe('#getWeatherForGeoloc', () => {
  it('should return a valid result', () => {
    getWeatherForGeoloc(35, 139).then(body => {
      expect(isValid(body)).toBe(true)
    })
  })
})

describe('#getWeatherForCity', () => {
  it('should return a valid result', () => {
    getWeatherForCity('London', 'UK').then(body => {
      expect(isValid(body)).toBe(true)
    })
  })
})

const isValid = (resp) => {
  return validMainSection(resp.main)
}

const validMainSection = (mainSection) => {
  if (mainSection === undefined) {
    return false
  }

  return (
    !isNaN(mainSection.temp) &&
    !isNaN(mainSection.pressure) &&
    !isNaN(mainSection.humidity) &&
    !isNaN(mainSection.temp_min) &&
    !isNaN(mainSection.temp_max)
  )
}
