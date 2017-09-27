import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import WeatherDisplay from '../WeatherDisplay'

/*
  TestUtils isn't able to recognize a stateless function
  as a React component. So, we wrap the real component in a
  stateful component for testing purposes
*/
class Wrapper extends Component {
  render() { return(<WeatherDisplay {...this.props} />) }
}

describe('WeatherDisplay', () => {
  describe('with weather for city', () => {
    const data = {
      name: 'Berlin',
      sys: { country: 'DE' },
      coord: { lat: 10, lon: 20 },
      main: { temp: 20.5 }
    }
    const subject = ReactTestUtils.renderIntoDocument(<Wrapper data={data} />)

    const outline = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'city').textContent
    const temperature = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'temp').textContent

    it('renders the component correctly', () => {
      expect(outline).toEqual('Berlin - Germany')
      expect(temperature).toEqual('20.5 °C')
    })
  })

  describe('with weather for geoloc', () => {
    const data = {
      name: 'Berlin',
      sys: {},
      coord: { lat: 10, lon: 20 },
      main: { temp: 20.5 }
    }
    const subject = ReactTestUtils.renderIntoDocument(<Wrapper data={data} />)

    const outline = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'city').textContent
    const temperature = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'temp').textContent

    it('renders the component correctly', () => {
      expect(outline).toEqual('Berlin - 10,20')
      expect(temperature).toEqual('20.5 °C')
    })
  })
})
