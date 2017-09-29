import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import * as Weather from '../../weather/Weather'

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
    const subject = Weather.mapWeatherIDtoIcon

    it('should map 2** to ThunderCloud', () => {
      expect(subject(200).type).toBe(Weather.ThunderCloud)
      expect(subject(299).type).toBe(Weather.ThunderCloud)
    })

    it('should map 3** to RainCloud', () => {
      expect(subject(300).type).toBe(Weather.RainCloud)
      expect(subject(399).type).toBe(Weather.RainCloud)
    })

    it('should map 5** to RainCloud', () => {
      expect(subject(500).type).toBe(Weather.RainCloud)
      expect(subject(599).type).toBe(Weather.RainCloud)
    })

    it('should map 6** to SnowCloud', () => {
      expect(subject(600).type).toBe(Weather.SnowCloud)
      expect(subject(699).type).toBe(Weather.SnowCloud)
    })

    it('should map 7** to WindyCloud', () => {
      expect(subject(700).type).toBe(Weather.WindyCloud)
      expect(subject(799).type).toBe(Weather.WindyCloud)
    })

    it('should map [801..809] to SunCloud', () => {
      expect(subject(800).type).not.toBe(Weather.SunCloud)
      expect(subject(801).type).toBe(Weather.SunCloud)
      expect(subject(809).type).toBe(Weather.SunCloud)
      expect(subject(899).type).not.toBe(Weather.SunCloud)
    })

    it('should map 800 to Sunshine', () => {
      expect(subject(800).type).toBe(Weather.Sunshine)
    })

    it('should map [801..809] to SunCloud', () => {
      expect(subject(801).type).toBe(Weather.SunCloud)
      expect(subject(809).type).toBe(Weather.SunCloud)
      expect(subject(899).type).not.toBe(Weather.SunCloud)
    })

    it('should map to Sunshine when unknown range', () => {
      expect(subject(1234).type).toBe(Weather.Sunshine)
    })
  })

  describe('Icons', () => {
    it('should render a ThunderCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<Weather.ThunderCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'thunder-cloud')).toBeDefined()
    })

    it('should render a RainCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<Weather.RainCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'rain-cloud')).toBeDefined()
    })

    it('should render a SnowCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<Weather.SnowCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'snow-cloud')).toBeDefined()
    })

    it('should render a SunCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<Weather.SunCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'sun-cloud')).toBeDefined()
    })

    it('should render a Sunshine icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<Weather.Sunshine />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'sunshine')).toBeDefined()
    })

    it('should render a WindyCloud icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<Weather.WindyCloud />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'windy-cloud')).toBeDefined()
    })

    it('should render a Wind icon correctly', () => {
      const subject =  ReactTestUtils.renderIntoDocument(<Wrapper inst={<Weather.Wind />} />)
      expect(ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'wind')).toBeDefined()
    })
  })
})
