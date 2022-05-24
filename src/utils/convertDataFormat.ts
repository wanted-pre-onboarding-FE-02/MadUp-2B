import DATA from '../data/wanted_FE_ad-list-data-set.json'

import { getConvertedCurrnecy } from './convertCurrencyFormat'

export const getConvertedData = () => {
  return {
    count: DATA.count,
    ads: DATA.ads.map((ad) => {
      const converedAdType = ad.adType === 'web' ? '웹광고' : '앱광고'
      const convertedStatus = ad.status === 'active' ? '진행중' : '중단됨'

      return {
        id: ad.id,
        adType: converedAdType,
        title: ad.title,
        budget: getConvertedCurrnecy(ad.budget),
        status: convertedStatus,
        startDate: Intl.DateTimeFormat('ko-KR').format(new Date(ad.startDate)).replaceAll('. ', '-').replace('.', ''),
        endDate:
          ad.endDate &&
          Intl.DateTimeFormat('ko-KR').format(new Date(ad.endDate)).replaceAll('. ', '-').replace('.', ''),
        report: {
          cost: getConvertedCurrnecy(ad.report.cost),
          convValue: getConvertedCurrnecy(ad.report.convValue),
          roas: ad.report.roas,
        },
      }
    }),
  }
}
