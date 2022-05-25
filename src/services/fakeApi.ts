import MEDIA_DATA from 'assets/json/MEDIA_DATA.json'
import AD_DATA from 'assets/json/AD_DATA.json'
import TREND_DATA from 'assets/json/TREND_DATA.json'
import { IMediaData } from 'types/media.d'
import { IReportDataSet } from 'types/trendDataSet'

export interface IAdData {
  count: number
  ads: {
    id: number
    adType: string
    title: string
    budget: number
    status: string
    startDate: string
    endDate: string | null
    report: {
      cost: number
      convValue: number
      roas: number
    }
  }[]
}

const DELAY_TIME = 2000
export const getMediaDataApi = (): Promise<IMediaData[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MEDIA_DATA)
    }, DELAY_TIME)
  })

export const getAdDataApi = (): Promise<IAdData> =>
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
