import { getSalesStatus } from 'services/status'
import { IDailyData, IDiffData } from 'types/advertise'
import { getMinus, getPlus } from './num'

function getSumObj(array: IDailyData[]) {
  return array.reduce((prev, current) => {
    return {
      roas: getPlus(prev.roas, current.roas),
      cost: getPlus(prev.cost, current.cost),
      imp: getPlus(prev.imp, current.imp),
      click: getPlus(prev.click, current.click),
      conv: getPlus(prev.conv, current.conv),
      sales: getPlus(prev.sales, current.sales),
    }
  })
}

export async function getDiffData(startDate: string, endDate: string) {
  const daily = await getSalesStatus()

  const currentIdx = daily.findIndex((data) => data.date === `${startDate}`)
  const lastIdx = daily.findIndex((data) => data.date === `${endDate}`)
  const distance = lastIdx - currentIdx

  const prevArr = getSumObj(daily.slice(currentIdx - distance - 1, lastIdx - distance)) // 그 이전 날짜 범위
  const currentArr = getSumObj(daily.slice(currentIdx, lastIdx + 1)) // 현재 날짜 범위

  const newArr = [prevArr, currentArr]

  const test = newArr.reduce((prev, current): IDiffData => {
    return {
      roas: getMinus(current.roas, prev.roas),
      cost: getMinus(current.cost, prev.cost),
      imp: getMinus(current.imp, prev.imp),
      click: getMinus(current.click, prev.click),
      conv: getMinus(current.conv, prev.conv),
      sales: getMinus(current.sales, prev.sales),
    }
  })
  return test // 비굣값
}

export async function getCurrentData(startDate: string, endDate: string) {
  const currentData = await getSalesStatus()
  const currentIdx = currentData.findIndex((data) => data.date === `${startDate}`)
  const lastIdx = currentData.findIndex((data) => data.date === `${endDate}`)

  const currentArr = getSumObj(currentData.slice(currentIdx, lastIdx + 1)) // 현재 날짜 범위

  return currentArr
}
