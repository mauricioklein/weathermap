import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import CityForm from '../CityForm'

describe('CityForm', () => {
  describe('when component is not visible', () => {
    const subject = ReactTestUtils.renderIntoDocument(<CityForm isVisible={false} />)
    const mainStyles = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'form-horizontal').style._values

    it('should be hidden', () => {
      expect(mainStyles.display).toEqual('none')
    })
  })

  describe('when component is visible', () => {
    beforeEach = () => {
      spyOn(mock, 'searchCallback')
    }

    const mock = { searchCallback: jest.fn() }
    const subject = ReactTestUtils.renderIntoDocument(<CityForm isVisible={true} searchCallback={mock.searchCallback} />)
    const submitButton = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'btn')

    it('should invoke the callback with the correct elements', () => {
      // Set form values
      subject.cityField.value = 'Berlin'
      subject.countryField.value = 'DE'

      // Trigger the search
      ReactTestUtils.Simulate.click(submitButton)

      // Asserts the callback
      expect(mock.searchCallback).toHaveBeenCalledWith('Berlin', 'DE')
    })
  })

})
