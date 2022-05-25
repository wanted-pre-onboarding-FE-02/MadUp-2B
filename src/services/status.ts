import axios from 'axios'
import { IDailyData, IReportData } from 'types/advertise'
import { getMultiAndDiv } from 'utils/num'

export async function getAdvertiseStatus(): Promise<IReportData> {
  // 처음 데이터 불러오기
  try {
    const { data } = await axios.get('data/wanted_FE_trend-data-set.json')
    return data.report
  } catch (err) {
    throw new Error('데이터 불러오기 실패!')
  }
}

export async function getSalesStatus(): Promise<IDailyData[]> {
  // sales(매출)값 계산해서 넣어주기
  const { daily } = await getAdvertiseStatus()
  daily.forEach((item) => {
    item.roas = Math.round(item.roas)
    item.sales = Math.round(getMultiAndDiv(item.roas, item.cost, 100))
  })
  return daily
}
