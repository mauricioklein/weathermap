import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import CityForm from '../CityForm'
import Countries from '../Countries'

describe('CityForm', () => {
  describe('when component is not visible', () => {
    const subject = ReactTestUtils.renderIntoDocument(<CityForm isVisible={false} />)
    const mainStyles = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'form-horizontal').style._values

    it('should be hidden', () => {
      expect(mainStyles.display).toEqual('none')
    })
  })

  describe('when component is visible', () => {
    beforeEach = () => { spyOn(mock, 'searchCallback') }

    const mock = { searchCallback: jasmine.createSpy('spy') }
    const subject = ReactTestUtils.renderIntoDocument(<CityForm isVisible={true} searchCallback={mock.searchCallback} />)
    const cityField = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'city-field')
    const countryField = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'country-field')
    const submitButton = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'btn')

    it('should invoke the callback with the correct elements', () => {
      subject.state = {
        city: 'Berlin',
        country: 'DE'
      }

      // Trigger the search
      ReactTestUtils.Simulate.click(submitButton)

      // Asserts the callback
      expect(mock.searchCallback).toHaveBeenCalledWith('Berlin', 'DE')
    })

    it('should not invoke the callback if some field is missing', () => {
      mock.searchCallback.calls.reset()
      subject.state.city = ''

      // Trigger the search
      ReactTestUtils.Simulate.click(submitButton)

      expect(mock.searchCallback).not.toHaveBeenCalled()
    })

    it('should update the state when the city is typed', () => {
      ReactTestUtils.Simulate.change(cityField, { target: { value: 'Foo' } })
      expect(subject.state.city).toEqual('Foo')
    })

    it('should update the state when the country is selected', () => {
      ReactTestUtils.Simulate.change(countryField, { target: { value: 'Bar' } })
      expect(subject.state.country).toEqual('Bar')
    })
  })
})
