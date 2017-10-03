import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import FormSelector from '../FormSelector'

/*
  ReactTestUtils isn't able to recognize a stateless function
  as a React component. So, we wrap the real component in a
  stateful component for testing purposes
*/
class Wrapper extends Component {
  render() { return(<FormSelector {...this.props} />) }
}

describe('FormSelector', () => {
  beforeEach = () => {
    spyOn(mock, 'cityFormCallback')
    spyOn(mock, 'geolocFormCallback')
  }

  const mock = {
    cityFormCallback:   jest.fn(),
    geolocFormCallback: jest.fn()
  }

  const subject = ReactTestUtils.renderIntoDocument(
    <Wrapper
      activateCityForm={mock.cityFormCallback}
      activateGeolocForm={mock.geolocFormCallback}
    />
  )

  describe('city form callback', () => {
    const button = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'cityFormBtn')

    it('should dispatch the callback when the button is clicked', () => {
      ReactTestUtils.Simulate.click(button)
      expect(mock.cityFormCallback).toHaveBeenCalled()
    })
  })

  describe('geoloc form callback', () => {
    const button = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'geolocFormBtn')

    it('should dispatch the callback when the button is clicked', () => {
      ReactTestUtils.Simulate.click(button)
      expect(mock.geolocFormCallback).toHaveBeenCalled()
    })
  })
})
