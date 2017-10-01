import React, { Component } from 'react'

const classNames = require('classnames')

class GeolocForm extends Component {
  constructor(props) {
    super(props)
    this.state = { errors: {} }
    this.callback = this.callback.bind(this)
  }

  callback() {
    const { props, latField, lngField } = this

    if(this.hasInvalidFields()) { return }

    props.searchCallback(
      latField.value,
      lngField.value
    )
  }

  hasInvalidFields() {
    const { latField, lngField } = this

    const errors = {
      lat: latField.value === '',
      lng: lngField.value === ''
    }

    this.setState({errors: errors})
    return Object.values(errors).some(hasError => hasError)
  }

  render() {
    const style = { display: (this.props.isVisible ? 'block' : 'none') }

    return (
      <div className="form-horizontal" style={style}>
        { /* City field */ }
        <div className={classNames('form-group', { 'has-error': this.state.errors.lat })}>
          <label className="control-label col-md-3">Lat:</label>
          <div className="col-md-9">
            <input
              type="number"
              ref={(input) => this.latField = input}
              className="form-control"
              placeholder="Enter latitude (e.g. 52.522392)"
            />
          </div>
        </div>

        { /* Country field */ }
        <div className={classNames('form-group', { 'has-error': this.state.errors.lng })}>
          <label className="control-label col-md-3">Lng:</label>
          <div className="col-md-9">
            <input
              type="number"
              ref={(input) => this.lngField = input}
              className="form-control"
              placeholder="Enter longitude (e.g. 13.412346)"
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

export default GeolocForm
