import * as Weather from '../../weather/Weather'

describe('Weather', () => {
  describe('mapWeatherIDtoIcon', () => {
    const subject = Weather.mapWeatherIDtoIcon

    it('should map 2** to ThunderCloud', () => {
      expect(subject(200).type).toBe(Weather.ThunderCloud)
      expect(subject(299).type).toBe(Weather.ThunderCloud)
    })

    it('should map 3** to RainCloud', () => {
      expect(subject(300).type).toBe(Weather.RainCloud)
      expect(subject(399).type).toBe(Weather.RainCloud)
    })

    it('should map 5** to RainCloud', () => {
      expect(subject(500).type).toBe(Weather.RainCloud)
      expect(subject(599).type).toBe(Weather.RainCloud)
    })

    it('should map 6** to SnowCloud', () => {
      expect(subject(600).type).toBe(Weather.SnowCloud)
      expect(subject(699).type).toBe(Weather.SnowCloud)
    })

    it('should map [801..809] to SunCloud', () => {
      expect(subject(800).type).not.toBe(Weather.SunCloud)
      expect(subject(801).type).toBe(Weather.SunCloud)
      expect(subject(809).type).toBe(Weather.SunCloud)
      expect(subject(899).type).not.toBe(Weather.SunCloud)
    })

    it('should map 800 to Sunshine', () => {
      expect(subject(800).type).toBe(Weather.Sunshine)
    })

    it('should map [801..809] to SunCloud', () => {
      expect(subject(801).type).toBe(Weather.SunCloud)
      expect(subject(809).type).toBe(Weather.SunCloud)
      expect(subject(899).type).not.toBe(Weather.SunCloud)
    })

    it('should map to Sunshine when unknown range', () => {
      expect(subject(1234).type).toBe(Weather.Sunshine)
    })
  })
})
