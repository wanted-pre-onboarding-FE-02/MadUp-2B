import { getAdvertiseStatus, getSalesStatus } from 'services/status'
import { IDailyData, IDiffData } from 'types/advertise'

function getSumObj(array: IDailyData[]) {
  return array.reduce((prev, current) => {
    return {
      imp: prev.imp + current.imp,
      click: prev.click + current.click,
      cost: prev.cost + current.cost,
      conv: prev.conv + current.conv,
      roas: prev.roas + current.roas,
      sales: prev.sales + current.sales,
    }
  })
}

export async function getDiffData(startDate: string, endDate: string) {
  const daily = await getSalesStatus()

  const currentIdx = daily.findIndex((data) => data.date === `${startDate}`)
  const lastIdx = daily.findIndex((data) => data.date === `${endDate}`)
  const distance = lastIdx - currentIdx
  console.log(currentIdx, lastIdx)

  const prevArr = getSumObj(daily.slice(currentIdx - distance - 1, lastIdx - distance)) // 그 이전 날짜 범위
  const currentArr = getSumObj(daily.slice(currentIdx, lastIdx + 1)) // 현재 날짜 범위

  console.log(prevArr, currentArr)

  const newArr = [prevArr, currentArr]

  const test = newArr.reduce((prev, current): IDiffData => {
    return {
      imp: current.imp - prev.imp,
      click: current.click - prev.click,
      cost: current.cost - prev.cost,
      conv: current.conv - prev.conv,
      roas: current.roas - prev.roas,
      sales: current.sales - prev.sales,
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
