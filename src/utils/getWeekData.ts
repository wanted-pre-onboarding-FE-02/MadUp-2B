import { getAdvertiseStatus, getSalesStatus } from 'services/status'
import { IDailyData } from 'types/advertise'
import dayjs from 'dayjs'

export async function getWeekData(startDate: string): Promise<IDailyData[]> {
  const wholeData = await getSalesStatus()
  const currentIdx = wholeData.findIndex((data) => data.date === `${startDate}`)
  if (currentIdx + 7 > 79) {
    return wholeData.slice(currentIdx, 79)
  }
  return wholeData.slice(currentIdx, currentIdx + 7)
}

interface graphData {
  x: string
  y: number | string
}

export async function getBetweenData(startDate: string, endDate: string, keyword: string): Promise<graphData[]> {
  const wholeData = await getSalesStatus()
  const currentIdx = wholeData.findIndex((data) => data.date === `${startDate}`)
  const lastIdx = wholeData.findIndex((data) => data.date === `${endDate}`)
  const newArr = wholeData.slice(currentIdx, lastIdx)
  const emptyArr: graphData[] = []

  newArr.forEach((d) => {
    const newData = dayjs(d.date)
    emptyArr.push({ x: newData.format('MM월 DD일'), y: d[keyword]! })
  })
  return emptyArr
}
