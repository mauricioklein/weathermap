import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import Countries from '../Countries'
import Wrapper from '../../test-utils/component-wrapper'

describe('Countries', () => {
  beforeEach = () => { spyOn(mock, 'searchCallback') }

  const mock = { onChange: jasmine.createSpy('spy') }
  const subject = ReactTestUtils.renderIntoDocument(
    <Wrapper
      component={<Countries onChange={mock.onChange} />}
    />
  )
  const selectField = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'country-field')

  it('should dispatch the callback when a new value is selected', () => {
    ReactTestUtils.Simulate.change(selectField)
    expect(mock.onChange).toHaveBeenCalled()
  })
})
