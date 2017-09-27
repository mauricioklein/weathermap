import React, { Component } from 'react'

class CityForm extends Component {
  constructor(props) {
    super(props)
    this.callback = this.callback.bind(this)
  }

  callback() {
    const { props, cityField, countryField } = this

    props.searchCallback(
      cityField.value,
      countryField.value
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
          <label className="control-label col-sm-3">City:</label>
          <div className="col-sm-9">
            <input ref={(input) => this.cityField = input} type="text" className="form-control" placeholder="Enter city" />
          </div>
        </div>

        { /* Country field */ }
        <div className="form-group">
          <label className="control-label col-sm-3">Country Code:</label>
          <div className="col-sm-9">
            <input ref={(input) => this.countryField = input} type="text" className="form-control" placeholder="Enter country code" />
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

export default CityForm
