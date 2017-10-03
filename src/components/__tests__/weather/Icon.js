import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import * as WeatherIcon from '../../weather/Icon'

/*
  ReactTestUtils isn't able to recognize a stateless function
  as a React component. So, we wrap the real component in a
  stateful component for testing purposes
*/
class Wrapper extends Component {
  render() { return(this.props.inst) }
}

describe('Weather', () => {
  describe('mapWeatherIDtoIcon', () => {
    const subject = WeatherIcon.iconForWeatherID

    it('should map 2** to ThunderCloud', () => {
      expect(subject(200).type).toBe(WeatherIcon.ThunderCloud)
      expect(subject(299).type).toBe(WeatherIcon.ThunderCloud)
    })

    it('should map 3** to RainCloud', () => {
      expect(subject(300).type).toBe(WeatherIcon.RainCloud)
      expect(subject(399).type).toBe(WeatherIcon.RainCloud)
    })

    it('should map 5** to RainCloud', () => {
      expect(subject(500).type).toBe(WeatherIcon.RainCloud)
      expect(subject(599).type).toBe(WeatherIcon.RainCloud)
    })

    it('should map 6** to SnowCloud', () => {
      expect(subject(600).type).toBe(WeatherIcon.SnowCloud)
      expect(subject(699).type).toBe(WeatherIcon.SnowCloud)
    })

    it('should map 7** to WindyCloud', () => {
      expect(subject(700).type).toBe(WeatherIcon.WindyCloud)
      expect(subject(799).type).toBe(WeatherIcon.WindyCloud)
    })

    it('should map [801..809] to SunCloud', () => {
      expect(subject(800).type).not.toBe(WeatherIcon.SunCloud)
      expect(subject(801).type).toBe(WeatherIcon.SunCloud)
      expect(subject(809).type).toBe(WeatherIcon.SunCloud)
      expect(subject(899).type).not.toBe(WeatherIcon.SunCloud)
    })

    it('should map 800 to Sunshine', () => {
      expect(subject(800).type).toBe(WeatherIcon.Sunshine)
    })

    it('should map [801..809] to SunCloud', () => {
      expect(subject(801).type).toBe(WeatherIcon.SunCloud)
      expect(subject(809).type).toBe(WeatherIcon.SunCloud)
      expect(subject(899).type).not.toBe(WeatherIcon.SunCloud)
    })

    it('should map to Sunshine when unknown range', () => {
      expect(subject(1234).type).toBe(WeatherIcon.Sunshine)
    })
  })

  describe('Icons', () => {
    it('should render a ThunderCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<WeatherIcon.ThunderCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'thunder-cloud')).toBeDefined()
    })

    it('should render a RainCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<WeatherIcon.RainCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'rain-cloud')).toBeDefined()
    })

    it('should render a SnowCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<WeatherIcon.SnowCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'snow-cloud')).toBeDefined()
    })

    it('should render a SunCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<WeatherIcon.SunCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'sun-cloud')).toBeDefined()
    })

    it('should render a Sunshine icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<WeatherIcon.Sunshine />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'sunshine')).toBeDefined()
    })

    it('should render a WindyCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<WeatherIcon.WindyCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'windy-cloud')).toBeDefined()
    })

    it('should render a Wind icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<WeatherIcon.Wind />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'wind')).toBeDefined()
    })
  })
})
