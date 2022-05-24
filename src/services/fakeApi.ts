import MEDIA_DATA from 'assets/json/MEDIA_DATA.json'
import AD_DATA from 'assets/json/AD_DATA.json'
import TREND_DATA from 'assets/json/TREND_DATA.json'

const DELAY_TIME = 2000

export const getMediaDataApi = new Promise((resolve) => {
  setTimeout(() => {
    resolve(MEDIA_DATA)
  }, DELAY_TIME)
})

export const getAdDataApi = new Promise((resolve) => {
  setTimeout(() => {
    resolve(AD_DATA)
  }, DELAY_TIME)
})

export const getTrendDataApi = new Promise((resolve) => {
  setTimeout(() => {
    resolve(TREND_DATA)
  }, DELAY_TIME)
})
