import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { WeatherDisplay } from '../WeatherDisplay'
import * as ApiMocks from '../../test-utils/api-mocks'
import Wrapper from '../../test-utils/component-wrapper'

describe('WeatherDisplay', () => {
  describe('with weather for city', () => {
    const data = ApiMocks.cityResponse
    const subject = ReactTestUtils.renderIntoDocument(
      <Wrapper
        component={<WeatherDisplay data={data} />}
      />
    )

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
    const subject = ReactTestUtils.renderIntoDocument(
      <Wrapper
        component={<WeatherDisplay data={data} />}
      />
    )

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
    const subject = ReactTestUtils.renderIntoDocument(
      <Wrapper
        component={<WeatherDisplay data={null} />}
      />
    )
    const message = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'temp').textContent

    it('should render the not found component', () => {
      expect(message).toEqual('Not Found')
    })
  })
})
