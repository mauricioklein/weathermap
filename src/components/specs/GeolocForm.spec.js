import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import GeolocForm from '../GeolocForm'

describe('GeolocForm', () => {
  describe('when component is not visible', () => {
    const subject = ReactTestUtils.renderIntoDocument(<GeolocForm isVisible={false} />)
    const mainStyles = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'form-horizontal').style._values

    it('should be hidden', () => {
      expect(mainStyles.display).toEqual('none')
    })
  })

  describe('when component is visible', () => {
    beforeEach = () => { spyOn(mock, 'searchCallback') }

    const mock = { searchCallback: jasmine.createSpy('spy') }
    const subject = ReactTestUtils.renderIntoDocument(<GeolocForm isVisible={true} searchCallback={mock.searchCallback} />)
    const submitButton = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'btn')

    it('should invoke the callback with the correct elements', () => {
      // Set form values
      subject.latField.value = '-12.345678'
      subject.lngField.value = '-87.654321'

      // Trigger the search
      ReactTestUtils.Simulate.click(submitButton)

      // Asserts the callback
      expect(mock.searchCallback).toHaveBeenCalledWith('-12.345678', '-87.654321')
    })

    it('should not invoke the callback if some field is missing', () => {
      mock.searchCallback.calls.reset()
      subject.latField.value = ''

      // Trigger the search
      ReactTestUtils.Simulate.click(submitButton)

      expect(mock.searchCallback).not.toHaveBeenCalled()
    })
  })

})
