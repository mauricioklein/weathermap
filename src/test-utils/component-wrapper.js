import React, { Component } from 'react'

/*
  ReactTestUtils isn't able to recognize a stateless function
  as a React component. So, we wrap the real component in a
  stateful component for testing purposes
*/
class Wrapper extends Component {
  render() {
    return this.props.component
  }
}

export default Wrapper
