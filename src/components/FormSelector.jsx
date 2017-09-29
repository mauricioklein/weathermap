import React from 'react'

const FormSelector = (props) => (
  <div className="form-group">
    <div className="btn-group btn-group-lg btn-group-justified">
      <div className="btn-group">
        <button type="button" className="cityFormBtn btn btn-default" onClick={props.activateCityForm}  >City Form  </button>
      </div>
      <div className="btn-group">
        <button type="button" className="geolocFormBtn btn btn-default" onClick={props.activateGeolocForm}>Geoloc Form</button>
      </div>
    </div>
  </div>
)

export default FormSelector
