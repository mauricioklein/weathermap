import React, { Component } from 'react'

class GeolocForm extends Component {
  constructor(props) {
    super(props)
    this.callback = this.callback.bind(this)
  }

  callback() {
    const { props, latField, lngField } = this

    props.searchCallback(
      latField.value,
      lngField.value
    )
  }

  render() {
    const style = {
      display: (this.props.isVisible ? 'block' : 'none')
    }

    return (
      <div className="form-horizontal" style={style}>
        { /* City field */ }
        <div className="form-group">
          <label className="control-label col-sm-3">Lat:</label>
          <div className="col-sm-9">
            <input ref={(input) => this.latField = input} type="text" className="form-control" placeholder="Enter latitude" />
          </div>
        </div>

        { /* Country field */ }
        <div className="form-group">
          <label className="control-label col-sm-3">Lng:</label>
          <div className="col-sm-9">
            <input ref={(input) => this.lngField = input} type="text" className="form-control" placeholder="Enter longitude" />
          </div>
        </div>

        { /* Submit button */ }
        <div className="form-group">
          <div className="col-sm-12">
            <button onClick={this.callback} className="btn btn-default">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GeolocForm
