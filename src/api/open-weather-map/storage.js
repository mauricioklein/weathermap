export const lookupGeoloc = (lat, lon) => {
  return deserialize(window.localStorage.getItem(newKey(lat, lon)))
}

export const storeGeoloc = (lat, lon, result) => {
  window.localStorage.setItem(newKey(lat, lon), serialize(result))
}

export const lookupCity = (city, country) => {
  return deserialize(window.localStorage.getItem(newKey(city, country)))
}

export const storeCity = (city, country, result) => {
  window.localStorage.setItem(newKey(city, country), serialize(result))
}

const newKey = (param1, param2) => (
  `${param1},${param2}`
)

const serialize = (result) => (
  JSON.stringify(result)
)

const deserialize = (result) => (
  JSON.parse(result)
)
