import React from 'react'
import './Icon.css'

export const WeatherIcon = (props) => {
  const { weatherId } = props

  switch(true) {
    case between(weatherId, 200, 299):
      return <ThunderCloud />

    case between(weatherId, 300, 399) || between(weatherId, 500, 599):
      return <RainCloud />

    case between(weatherId, 600, 699):
      return <SnowCloud />

    case between(weatherId, 700, 799):
      return <WindyCloud />

    case between(weatherId, 801, 809):
      return <SunCloud />

    default: return <Sunshine />
  }
}

const between = (value, min, max) => (
  (min <= value) && (value <= max)
)

export const ThunderCloud = () => (
  <svg className="thunder-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
    C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c12.3,10.7,26.2,19,40.9,25.4l24.9-24.9
    c-23.5-7.6-44.2-21.3-59.6-39.9c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
    C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
    c-17.1,0-32.9-5.5-45.9-14.7c-10.4,12.5-23.3,22.7-37.6,30.6L303,312.2c20.9-6.6,40.5-16.9,57.3-31.6c12.6,4.8,26,7.3,39.7,7.3
    c61.8,0,112-50.2,112-112S461.8,64,400,64z" />
    <polygon className="bolt" points="192,352 224,384 192,480 288,384 256,352 288,256 " />
  </svg>
)

export const RainCloud = () => (
  <svg className="rain-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path className="raindrop-one" d="M96,384c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S96,366.3,96,384z" />
    <path className="raindrop-two" d="M225,480c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S225,462.3,225,480z" />
    <path className="raindrop-three" d="M352,448c0,17.7,14.3,32,32,32s32-14.3,32-32s-32-64-32-64S352,430.3,352,448z" />
    <path d="M400,64c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1c-5.2-0.8-10.5-1.1-15.8-1.1
		C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3c38.5,0,75.3-14.1,104.3-39.3
		c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,64,400,64z M400,256c-17.1,0-32.9-5.5-45.9-14.7
		C330.6,269.6,295.6,288,256,288c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80
		c10.8,0,21.1,2.2,30.4,6.1C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80
		S444.2,256,400,256z" />
  </svg>
)

export const SnowCloud = () => (
  <svg className="snow-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path d="M512,176c0-61.8-50.2-112-112-112c-5.3,0-10.6,0.4-15.8,1.1C354.3,24.4,307.2,0,256,0s-98.3,24.4-128.2,65.1
		c-5.2-0.8-10.5-1.1-15.8-1.1C50.2,64,0,114.2,0,176s50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
		c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3C461.8,288,512,237.8,512,176z M354.1,241.3C330.6,269.6,295.6,288,256,288
		c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7c-44.2,0-80-35.8-80-80s35.8-80,80-80c10.8,0,21.1,2.2,30.4,6.1
		C163.7,60.7,206.3,32,256,32s92.3,28.7,113.5,70.1c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80s-35.8,80-80,80
		C382.9,256,367.1,250.5,354.1,241.3z" />

    <path className="snowflake-one" d="M131.8,349.9c-1.5-5.6-7.3-8.9-12.9-7.4l-11.9,3.2c-1.1-1.5-2.2-3-3.6-4.4c-1.4-1.4-2.9-2.6-4.5-3.6l3.2-11.9
	c1.5-5.6-1.8-11.4-7.4-12.9c-5.6-1.5-11.4,1.8-12.9,7.4l-3.2,12.1c-3.8,0.3-7.5,1.2-10.9,2.9l-8.8-8.8c-4.1-4.1-10.8-4.1-14.8,0
	c-4.1,4.1-4.1,10.8,0,14.9l8.8,8.8c-1.6,3.5-2.6,7.2-2.9,11l-12,3.2c-5.6,1.5-9,7.2-7.5,12.9c1.5,5.6,7.3,8.9,12.9,7.4l11.9-3.2
	c1.1,1.6,2.2,3.1,3.7,4.5c1.4,1.4,2.9,2.6,4.4,3.6l-3.2,11.9c-1.5,5.6,1.8,11.4,7.4,12.9c5.6,1.5,11.3-1.8,12.8-7.4l3.2-12
	c3.8-0.3,7.5-1.3,11-2.9l8.8,8.8c4.1,4.1,10.7,4,14.8,0c4.1-4.1,4.1-10.7,0-14.8l-8.8-8.8c1.7-3.5,2.7-7.2,2.9-11l12.1-3.2
	C130,361.3,133.3,355.6,131.8,349.9z M88.6,371c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.8,0-14.8c4.1-4.1,10.8-4.1,14.9,0
	S92.6,366.9,88.6,371z" />
    <path className="snowflake-two" d="M304.8,437.6l-12.6-7.2c0.4-2.2,0.7-4.4,0.7-6.7c0-2.3-0.3-4.5-0.7-6.7l12.6-7.2c5.9-3.4,7.9-11,4.5-16.8
	c-3.4-5.9-10.9-7.9-16.8-4.5l-12.7,7.3c-3.4-2.9-7.2-5.2-11.5-6.7v-14.6c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3V389
	c-4.3,1.5-8.1,3.8-11.5,6.7l-12.7-7.3c-5.9-3.4-13.5-1.4-16.9,4.5c-3.4,5.9-1.4,13.4,4.5,16.8l12.5,7.2c-0.4,2.2-0.7,4.4-0.7,6.7
	c0,2.3,0.3,4.5,0.7,6.7l-12.5,7.2c-5.9,3.4-7.9,11-4.5,16.9s10.9,7.9,16.8,4.5l12.7-7.3c3.4,2.9,7.2,5.1,11.5,6.7V473
	c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-14.6c4.3-1.5,8.2-3.8,11.5-6.7l12.7,7.3c5.9,3.4,13.4,1.4,16.8-4.5
	C312.8,448.6,310.7,441.1,304.8,437.6z M256,436c-6.8,0-12.3-5.5-12.3-12.3c0-6.8,5.5-12.3,12.3-12.3s12.3,5.5,12.3,12.3
	C268.3,430.5,262.8,436,256,436z" />
    <path className="snowflake-three" d="M474.2,396.2l-12.1-3.2c-0.3-3.8-1.2-7.5-2.9-11l8.8-8.8c4.1-4.1,4.1-10.8,0-14.9c-4.1-4.1-10.7-4.1-14.8,0
	l-8.8,8.8c-3.5-1.6-7.1-2.6-11-2.9l-3.2-12.1c-1.5-5.6-7.2-8.9-12.9-7.4c-5.6,1.5-8.9,7.3-7.4,12.9l3.2,11.9
	c-1.6,1.1-3.1,2.3-4.5,3.7c-1.4,1.4-2.5,2.9-3.6,4.5l-11.9-3.2c-5.6-1.5-11.4,1.9-12.9,7.4c-1.5,5.6,1.9,11.4,7.4,12.9l12,3.2
	c0.3,3.8,1.3,7.5,3,11l-8.8,8.8c-4.1,4.1-4.1,10.7,0,14.8c4.1,4.1,10.7,4.1,14.8,0l8.8-8.8c3.5,1.7,7.2,2.7,11,3l3.2,12
	c1.5,5.6,7.2,8.9,12.9,7.4c5.6-1.5,9-7.2,7.5-12.9l-3.2-11.9c1.5-1.1,3-2.2,4.5-3.6c1.4-1.4,2.5-2.9,3.6-4.5l11.9,3.2
	c5.6,1.5,11.4-1.9,12.9-7.4C483.1,403.5,479.8,397.8,474.2,396.2z M438.3,402.9c-4.1,4.1-10.8,4.1-14.9,0c-4.1-4.1-4.1-10.7,0-14.9
	c4.1-4.1,10.8-4.1,14.9,0C442.4,392.2,442.4,398.9,438.3,402.9z" />
  </svg>
)

export const SunCloud = () => (
  <svg className="sun-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path className="sun-half" d="M127.8,259.1c3.1-4.3,6.5-8.4,10-12.3c-6-11.2-9.4-24-9.4-37.7c0-44.1,35.7-79.8,79.8-79.8
        c40,0,73.1,29.4,78.9,67.7c11.4,2.3,22.4,5.7,32.9,10.4c-0.4-29.2-12-56.6-32.7-77.3C266.1,109,238,97.4,208.2,97.4
        c-29.9,0-57.9,11.6-79.1,32.8c-21.1,21.1-32.8,49.2-32.8,79.1c0,17.2,3.9,33.9,11.2,48.9c1.5-0.1,3-0.1,4.4-0.1
        C117.3,258,122.6,258.4,127.8,259.1z" />
    <path className="cloud" d="M400,256c-5.3,0-10.6,0.4-15.8,1.1c-16.8-22.8-39-40.5-64.2-51.7c-10.5-4.6-21.5-8.1-32.9-10.4
        c-10.1-2-20.5-3.1-31.1-3.1c-45.8,0-88.4,19.6-118.2,52.9c-3.5,3.9-6.9,8-10,12.3c-5.2-0.8-10.5-1.1-15.8-1.1c-1.5,0-3,0-4.4,0.1
        C47.9,258.4,0,307.7,0,368c0,61.8,50.2,112,112,112c13.7,0,27.1-2.5,39.7-7.3c29,25.2,65.8,39.3,104.3,39.3
        c38.5,0,75.3-14.1,104.3-39.3c12.6,4.8,26,7.3,39.7,7.3c61.8,0,112-50.2,112-112S461.8,256,400,256z M400,448
        c-17.1,0-32.9-5.5-45.9-14.7C330.6,461.6,295.6,480,256,480c-39.6,0-74.6-18.4-98.1-46.7c-13,9.2-28.8,14.7-45.9,14.7
        c-44.2,0-80-35.8-80-80s35.8-80,80-80c7.8,0,15.4,1.2,22.5,3.3c2.7,0.8,5.4,1.7,8,2.8c4.5-8.7,9.9-16.9,16.2-24.4
        C182,241.9,216.8,224,256,224c10.1,0,20,1.2,29.4,3.5c10.6,2.5,20.7,6.4,30.1,11.4c23.2,12.4,42.1,31.8,54.1,55.2
        c9.4-3.9,19.7-6.1,30.5-6.1c44.2,0,80,35.8,80,80S444.2,448,400,448z" />

    <path className="ray ray-one" d="M16,224h32c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,224,16,224z" />
    <path className="ray ray-two" d="M83.5,106.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6L83.5,60.9c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6L83.5,106.2z" />
    <path className="ray ray-three" d="M208,64c8.8,0,16-7.2,16-16V16c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C192,56.8,199.2,64,208,64z" />
    <path className="ray ray-four" d="M332.4,106.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0l-22.6,22.6
        c-6.2,6.2-6.2,16.4,0,22.6S326.2,112.4,332.4,106.2z" />
    <path className="ray ray-five" d="M352,208c0,8.8,7.2,16,16,16h32c8.8,0,16-7.2,16-16s-7.2-16-16-16h-32C359.2,192,352,199.2,352,208z" />
  </svg>
)

export const Sunshine = () => (
  <svg className="sunshine" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path className="sun-full" d="M256,144c-61.8,0-112,50.2-112,112s50.2,112,112,112s112-50.2,112-112S317.8,144,256,144z M256,336
        c-44.2,0-80-35.8-80-80s35.8-80,80-80s80,35.8,80,80S300.2,336,256,336z" />
    <path className="sun-ray-eight" d="M131.6,357.8l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6s16.4,6.2,22.6,0l22.6-22.6c6.2-6.3,6.2-16.4,0-22.6
        C147.9,351.6,137.8,351.6,131.6,357.8z" />
    <path className="sun-ray-seven" d="M256,400c-8.8,0-16,7.2-16,16v32c0,8.8,7.2,16,16,16s16-7.2,16-16v-32C272,407.2,264.8,400,256,400z" />
    <path className="sun-ray-six" d="M380.5,357.8c-6.3-6.2-16.4-6.2-22.6,0c-6.3,6.2-6.3,16.4,0,22.6l22.6,22.6c6.2,6.2,16.4,6.2,22.6,0
        s6.2-16.4,0-22.6L380.5,357.8z" />
    <path className="sun-ray-five" d="M448,240h-32c-8.8,0-16,7.2-16,16s7.2,16,16,16h32c8.8,0,16-7.2,16-16S456.8,240,448,240z" />
    <path className="sun-ray-four" d="M380.4,154.2l22.6-22.6c6.2-6.2,6.2-16.4,0-22.6s-16.4-6.2-22.6,0l-22.6,22.6c-6.2,6.2-6.2,16.4,0,22.6
        C364.1,160.4,374.2,160.4,380.4,154.2z" />
    <path className="sun-ray-three" d="M256,112c8.8,0,16-7.2,16-16V64c0-8.8-7.2-16-16-16s-16,7.2-16,16v32C240,104.8,247.2,112,256,112z" />
    <path className="sun-ray-two" d="M131.5,154.2c6.3,6.2,16.4,6.2,22.6,0c6.3-6.2,6.3-16.4,0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6,0
        c-6.2,6.2-6.2,16.4,0,22.6L131.5,154.2z" />
    <path className="sun-ray-one" d="M112,256c0-8.8-7.2-16-16-16H64c-8.8,0-16,7.2-16,16s7.2,16,16,16h32C104.8,272,112,264.8,112,256z" />
  </svg>
)

export const WindyCloud = () => (
  <svg className="windy-cloud" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <g className="cloud-wrap">
    <path className="cloud" d="M417,166.1c-24-24.5-57.1-38.8-91.7-38.8c-34.6,0-67.7,14.2-91.7,38.8c-52.8,2.5-95,46.2-95,99.6
    c0,55,44.7,99.7,99.7,99.7c5.8,0,11.6-0.5,17.3-1.5c20.7,13.5,44.9,20.9,69.7,20.9c24.9,0,49.1-7.3,69.8-20.9
    c5.7,1,11.5,1.5,17.3,1.5c54.9,0,99.6-44.7,99.6-99.7C512,212.3,469.8,168.5,417,166.1z M412.4,333.3c-8.3,0-16.4-1.5-24-4.4
    c-17.5,15.2-39.8,23.8-63.1,23.8c-23.2,0-45.5-8.5-63-23.8c-7.6,2.9-15.8,4.4-24,4.4c-37.3,0-67.7-30.4-67.7-67.7
    c0-37.3,30.4-67.7,67.7-67.7c3.2,0,6.4,0.2,9.5,0.7c18.1-24.6,46.5-39.4,77.5-39.4c30.9,0,59.4,14.8,77.5,39.4
    c3.1-0.5,6.3-0.7,9.6-0.7c37.3,0,67.6,30.4,67.6,67.7C480,303,449.7,333.3,412.4,333.3z" />
    </g>
    <path className="wind-three" d="M144,352H16c-8.8,0-16,7.2-16,16s7.2,16,16,16h128c8.8,0,16-7.2,16-16S152.8,352,144,352z" />
    <path className="wind-two" d="M16,320h94c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,320,16,320z" />
    <path className="wind-one" d="M16,256h64c8.8,0,16-7.2,16-16s-7.2-16-16-16H16c-8.8,0-16,7.2-16,16S7.2,256,16,256z" />
  </svg>
)

export const Wind = () => (
  <svg version="1.1" id="wind" className="wind" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.492 300.492" style={{enableBackground: "new 0 0 300.492 300.492"}} xmlSpace="preserve">
    <g>
      <g>
        <g>
          <path style={{fill: "#FFFFFF"}} d="M287.166,100.421c-9.502-13.217-24.046-23.034-39.868-26.945
            c-5.309-1.365-10.845-2.061-16.453-2.061c-11.531,0-22.257,3.035-30.981,8.746c-14.076,8.86-23.709,23.91-25.759,40.157
            c-2.698,16.644,4.357,34.315,17.519,43.959c7.555,5.716,17.47,8.991,27.201,8.991c7.332,0,14.109-1.811,19.575-5.216
            c14.936-8.991,21.495-28.577,14.626-43.665c-3.525-7.669-10.427-13.647-18.455-15.975c-2.361-0.696-4.754-1.082-7.131-1.164
            l-0.288,5.434c1.974,0.141,3.916,0.544,5.782,1.202c6.288,2.143,11.536,7.093,14.044,13.288c1.256,2.975,1.893,6.211,1.822,9.355
            c-0.071,3.421-0.658,6.565-1.855,9.861c-2.366,6.222-6.967,11.667-12.678,14.968c-10.269,6.233-26.624,4.329-37.171-4.172
            c-10.405-8.278-15.529-21.87-13.364-35.528c1.8-13.413,9.85-25.71,21.56-32.912c5.553-3.514,12.069-5.803,18.868-6.636
            c2.823-0.359,6.619-0.413,10.285-0.131c3.497,0.31,7.033,0.903,10.231,1.713c13.358,3.437,25.623,11.863,33.668,23.154
            c8.365,11.324,12.325,24.96,11.438,39.477c-0.587,14.098-5.423,28.305-13.619,40.021c-8.159,11.759-19.907,21.354-33.108,27.027
            c-6.059,2.654-13.07,4.574-20.832,5.695c-4.803,0.68-9.959,0.8-16.203,0.892l-176.09,2.339l-29.817,1.164l0.109,5.439
            l199.015,0.131c2.295,0,4.596,0,6.88,0.022l4.253,0.027c3.835,0,8.376-0.071,12.988-0.593c8.36-1.033,16.263-3.111,23.464-6.168
            c14.925-6.206,28.283-16.905,37.606-30.127c9.426-13.206,15.072-29.36,15.893-45.438
            C301.476,130.293,296.679,113.399,287.166,100.421z"/>
        </g>
        <g>
          <path style={{fill: '#FFFFFF'}} d="M106.617,209.839c0.664-0.027,1.463-0.038,2.23-0.038l5.445,0.065
            c1.528,0.027,2.959,0.049,4.395,0.049c2.801,0,6.511-0.076,10.438-0.647c7.626-1.246,14.849-4.471,20.864-9.312
            c12.374-9.752,18.874-25.999,16.562-41.391c-2.371-15.648-15.953-28.697-31.547-30.35c-8.539-1.05-16.421,0.979-22.404,5.619
            c-6.451,4.824-10.688,12.091-11.612,19.842c-1.229,8.077,1.806,16.589,7.664,21.637c5.803,5.287,15.431,7.43,22.387,5.037
            c5.102-1.702,9.42-5.798,11.563-10.971l-4.928-2.284c-1.817,3.519-5.096,6.124-8.762,6.957c-1.218,0.277-2.317,0.408-3.367,0.408
            c-4.329,0-8.762-1.866-11.591-4.89c-3.835-4.003-5.249-9.11-4.096-14.762c1.044-5.08,4.308-10.106,8.496-13.124
            c4.449-3.176,9.284-4.286,15.349-3.405c11.123,1.441,20.603,10.943,22.077,22.229c1.996,11.335-2.877,24.013-12.173,31.585
            c-4.585,3.867-10.193,6.494-16.236,7.604c-2.469,0.479-4.922,0.571-7.647,0.642l-104.506,2.752
            C10.264,203.524,5.134,203.9,0,204.275l0.19,5.434L106.617,209.839z"/>
        </g>
      </g>
    </g>
  </svg>
)
