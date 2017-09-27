import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import App from '../App';
import Form from '../Form'

describe('App', () => {
  const subject = ReactTestUtils.renderIntoDocument(<App />)

  describe('render', () => {
    const formElem = ReactTestUtils.findRenderedComponentWithType(subject, Form)

    it('should render the tree correctly', () => {
      expect(formElem).not.toBe(undefined)
    })
  })
})
