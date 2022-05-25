import MEDIA_DATA from 'assets/json/MEDIA_DATA.json'
import AD_DATA from 'assets/json/AD_DATA.json'
import TREND_DATA from 'assets/json/TREND_DATA.json'
import { IReportDataSet } from 'types/trendDataSet'

interface IData {
  channel: string
  date: string
  imp: number
  click: number
  cost: number
  convValue: number
  ctr: number
  cvr: number
  cpc: number
  cpa: number
  roas: number
}

const DELAY_TIME = 2000
export const getMediaDataApi = (): Promise<IData[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MEDIA_DATA)
    }, DELAY_TIME)
  })

export const getAdDataApi = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(AD_DATA)
    }, DELAY_TIME)
  })

export const getTrendDataApi = (): Promise<IReportDataSet> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(TREND_DATA)
    }, DELAY_TIME)
  })
