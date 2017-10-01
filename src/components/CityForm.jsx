import React, { Component } from 'react'
import { Countries } from './Countries'

const classNames = require('classnames')

class CityForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      country: '',
      errors: {}
    }
    this.search = this.search.bind(this)
  }

  search() {
    const { city, country } = this.state

    if(this.hasInvalidFields(city, country)) { return }

    this.props.searchCallback(city, country)
  }

  setCity(ev) {
    this.setState({
      city: ev.target.value
    })
  }

  setCountry(ev) {
    this.setState({
      country: ev.target.value
    })
  }

  hasInvalidFields(city, country) {
    const errors = {
      city:    city === '',
      country: country === ''
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
          <label className="control-label col-md-3">City</label>
          <div className="col-md-9">
            <input
              type="text"
              onChange={(ev) => this.setCity(ev)}
              className="form-control city-field"
              placeholder="Enter city (e.g. London)"
            />
          </div>
        </div>

        { /* Country field */ }
        <div className={classNames('form-group', { 'has-error': this.state.errors.country })}>
          <label className="control-label col-md-3">Country</label>
          <div className="col-md-9">
            <Countries onChange={(ev) => this.setCountry(ev)} />
          </div>
        </div>

        { /* Submit button */ }
        <div className="form-group">
          <div className="col-md-10 col-md-offset-2">
            <button className="btn btn-default" onClick={this.search}>Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CityForm
