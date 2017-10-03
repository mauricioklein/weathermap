import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { WeatherDisplay } from '../WeatherDisplay'
import * as ApiMocks from '../../test-utils/api-mocks'

/*
  ReactTestUtils isn't able to recognize a stateless function
  as a React component. So, we wrap the real component in a
  stateful component for testing purposes
*/
class Wrapper extends Component {
  render() { return(<WeatherDisplay {...this.props} />) }
}

describe('WeatherDisplay', () => {
  describe('with weather for city', () => {
    const data = ApiMocks.cityResponse
    const subject = ReactTestUtils.renderIntoDocument(<Wrapper data={data} />)

    const outline =      ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'city'       ).textContent
    const description =  ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'description').textContent
    const temperature =  ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'temp'       ).textContent
    const windSpeed =    ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'wind-speed' ).textContent
    const sunshineIcon = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'sunshine'   )

    it('renders the component correctly', () => {
      expect(outline    ).toEqual('Berlin - Germany')
      expect(description).toEqual('clear sky')
      expect(temperature).toEqual('17 °C')
      expect(windSpeed  ).toEqual('4.1 km/h')
      expect(sunshineIcon).not.toBeNull()
    })
  })

  describe('with weather for geoloc', () => {
    const data = ApiMocks.geolocResponse
    const subject = ReactTestUtils.renderIntoDocument(<Wrapper data={data} />)

    const outline =       ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'city'       ).textContent
    const description =   ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'description').textContent
    const temperature =   ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'temp'       ).textContent
    const windSpeed =     ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'wind-speed' ).textContent
    const rainCloudIcon = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'rain-cloud' )

    it('renders the component correctly', () => {
      expect(outline    ).toEqual(' - -14,-16')
      expect(description).toEqual('light rain')
      expect(temperature).toEqual('22 °C')
      expect(windSpeed  ).toEqual('6.23 km/h')
      expect(rainCloudIcon).not.toBeNull()
    })
  })

  describe('with null data', () => {
    const subject = ReactTestUtils.renderIntoDocument(<Wrapper data={null} />)
    const message = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'temp').textContent

    it('should render the not found component', () => {
      expect(message).toEqual('Not Found')
    })
  })
})
