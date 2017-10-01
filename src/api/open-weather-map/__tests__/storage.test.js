import request from 'superagent';
import localStorage from 'mock-local-storage'
import * as Storage from '../storage'

import '../../../test_utils/custom_expectations'

describe('Storage', () => {
  afterEach(() => window.localStorage.clear())

  const result = { foo: 'bar' }

  describe('#lookupGeoloc', () => {
    it('should return the result if key exists', () => {
      window.localStorage.setItem('10,20', JSON.stringify(result))
      expect(Storage.lookupGeoloc(10, 20)).toEqual(result)
    })

    it("should return null if key doesn't exists", () => {
      expect(Storage.lookupGeoloc(10, 20)).toBe(null)
    })
  })

  describe('#storeGeoloc', () => {
    it('should store the serialized result', () => {
      Storage.storeGeoloc(10, 20, result)
      expect('10,20').toContainOnLocalStorage(result)
    })
  })

  describe('#lookupCity', () => {
    it('should return the result if key exists', () => {
      window.localStorage.setItem('Berlin,DE', JSON.stringify(result))
      expect(Storage.lookupCity('Berlin', 'DE')).toEqual(result)
    })

    it("should return null if key doesn't exists", () => {
      expect(Storage.lookupCity('Quahog', 'US')).toBe(null)
    })
  })

  describe('#storeCity', () => {
    it('should store the serialized result', () => {
      Storage.storeCity('Berlin', 'DE', result)
      expect('Berlin,DE').toContainOnLocalStorage(result)
    })
  })

})
