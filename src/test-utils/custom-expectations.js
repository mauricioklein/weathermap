const customMatchers = {
  toContainOnLocalStorage: () => ({
    compare: (key, expectedValue) => {
      const storedValue = window.localStorage.getItem(key)
      const expectedSerialized = JSON.stringify(expectedValue)

      return {
        pass: storedValue === expectedSerialized,
        message: () => `Expected key "${key}" to have value ${expectedSerialized} on store, but got ${storedValue}`
      }
    }
  })
}

jasmine.addMatchers(customMatchers)
