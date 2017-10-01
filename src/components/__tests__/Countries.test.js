import React, { Component } from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import Countries from '../Countries'

/*
  ReactTestUtils isn't able to recognize a stateless function
  as a React component. So, we wrap the real component in a
  stateful component for testing purposes
*/
class Wrapper extends Component {
  render() { return(<Countries {...this.props} />) }
}

describe('Countries', () => {
  beforeEach = () => { spyOn(mock, 'searchCallback') }

  const mock = { onChange: jasmine.createSpy('spy') }
  const subject = ReactTestUtils.renderIntoDocument(<Wrapper onChange={mock.onChange} />)
  const selectField = ReactTestUtils.findRenderedDOMComponentWithClass(subject, 'country-field')

  it('should dispatch the callback when a new value is selected', () => {
    ReactTestUtils.Simulate.change(selectField)
    expect(mock.onChange).toHaveBeenCalled()
  })
})
