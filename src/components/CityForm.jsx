import React, { Component } from 'react'

const classNames = require('classnames')

class CityForm extends Component {
  constructor(props) {
    super(props)
    this.state = { errors: {} }
    this.callback = this.callback.bind(this)
  }

  callback() {
    const { props, cityField, countryField } = this

    if(this.hasInvalidFields()) { return }

    props.searchCallback(
      cityField.value,
      countryField.value
    )
  }

  hasInvalidFields() {
    const { cityField, countryField } = this

    const errors = {
      city:    cityField.value === '',
      country: countryField.value === ''
    }

    this.setState({errors: errors})
    return Object.values(errors).some(hasError => hasError)
  }

  render() {
    const style = {
      display: (this.props.isVisible ? 'block' : 'none')
    }

    return (
      <div className="form-horizontal" style={style}>
        { /* City field */ }
        <div className={classNames('form-group', { 'has-error': this.state.errors.city })}>
          <label className="control-label col-md-3">City:</label>
          <div className="col-md-9">
            <input
              type="text"
              ref={(input) => this.cityField = input}
              className="form-control"
              placeholder="Enter city (e.g. London)"
            />
          </div>
        </div>

        { /* Country field */ }
        <div className={classNames('form-group', { 'has-error': this.state.errors.country })}>
          <label className="control-label col-md-3">Country Code:</label>
          <div className="col-md-9">
            <input
              type="text"
              ref={(input) => this.countryField = input}
              className="form-control"
              placeholder="Enter country code (e.g. UK)"
            />
          </div>
        </div>

        { /* Submit button */ }
        <div className="form-group">
          <div className="col-md-10 col-md-offset-2">
            <button onClick={this.callback} className="btn btn-default">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CityForm
