import React from 'react'

const classNames = require('classnames')

const FormSelector = ({isCityActive, isGeolocActive, activateCityForm, activateGeolocForm}) => {
  const cityButtonStyle = classNames('btn', 'btn-default', 'cityFormBtn', { 'active': isCityActive })
  const geolocButtonStyle = classNames('btn', 'btn-default', 'geolocFormBtn', { 'active': isGeolocActive })

  return (
    <div className="form-group">
      <div className="btn-group btn-group-lg btn-group-justified">
        <div className="btn-group">
          <button type="button" className={cityButtonStyle} onClick={activateCityForm}>
              Search by City
          </button>
        </div>
        <div className="btn-group">
          <button type="button" className={geolocButtonStyle} onClick={activateGeolocForm}>Search by Geolocation</button>
        </div>
      </div>
    </div>
  )
}

export default FormSelector
