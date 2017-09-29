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
          <label className="control-label col-md-3">Lat:</label>
          <div className="col-md-9">
            <input ref={(input) => this.latField = input} type="text" className="form-control" placeholder="Enter latitude (e.g. 52.522392)" />
          </div>
        </div>

        { /* Country field */ }
        <div className="form-group">
          <label className="control-label col-md-3">Lng:</label>
          <div className="col-md-9">
            <input ref={(input) => this.lngField = input} type="text" className="form-control" placeholder="Enter longitude (e.g. 13.412346)" />
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
