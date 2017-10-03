import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import FormSelector from '../FormSelector'
import Wrapper from '../../test-utils/component-wrapper'

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
      component={
        <FormSelector
          activateCityForm={mock.cityFormCallback}
          activateGeolocForm={mock.geolocFormCallback}
        />
      }
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
