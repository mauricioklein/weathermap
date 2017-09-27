import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import Form from '../Form'
import CityForm from '../CityForm'
import GeolocForm from '../GeolocForm'

describe('Form', () => {
  const subject = ReactTestUtils.renderIntoDocument(<Form />)

  describe('setActiveForm', () => {
    const cityFormBtn = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'cityFormBtn')
    const geolocFormBtn = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'geolocFormBtn')

    it('should contain the correct default state', () => {
      expect(subject.state).toEqual({
        form: 'city',
        loaded: false,
        data: {}
      })
    })

    describe('when city form button is pressed', () => {
      beforeEach(() => ReactTestUtils.Simulate.click(cityFormBtn))

      it('should display the city form', () => {
        expect(subject.state.form).toEqual('city')
      })
    })

    describe('when geoloc form button is pressed', () => {
      beforeEach(() => ReactTestUtils.Simulate.click(geolocFormBtn))

      it('should display the geoloc form', () => {
        expect(subject.state.form).toEqual('geoloc')
      })
    })
  })

  describe('render tree', () => {
    const cityForm = ReactTestUtils.findRenderedComponentWithType(subject, CityForm)
    const geolocForm = ReactTestUtils.findRenderedComponentWithType(subject, GeolocForm)

    it('should render CityForm correctly', () => {
      subject.setState({form: 'city'})

      expect(cityForm.props.isVisible).toBe(true)
      expect(cityForm.props.searchCallback).toEqual(subject.triggerSearchByCity)
    })

    it('should render GeolocForm correctly', () => {
      subject.setState({form: 'geoloc'})

      expect(geolocForm.props.isVisible).toBe(true)
      expect(geolocForm.props.searchCallback).toEqual(subject.triggerSearchByGeoloc)
    })
  })
})
