import { ITrend2DataSet, ITrendDataSet } from 'types/trendDataSet'
import { getMinus, getMultiAndDiv, getPlus } from 'utils/num'

function getSumObj(array: ITrend2DataSet[]) {
  const sumObj = array.reduce((prev, current) => {
    return {
      roas: getPlus(prev.roas, current.roas),
      cost: getPlus(prev.cost, current.cost),
      imp: getPlus(prev.imp, current.imp),
      click: getPlus(prev.click, current.click),
      conv: getPlus(prev.conv, current.conv),
      sales: getPlus(prev.sales, current.sales),
    }
  })
  return sumObj
}

export function getDiffData(startDate: string, endDate: string | null, tData2: ITrend2DataSet[] | undefined) {
  if (!tData2 || !endDate) return undefined
  const currentIdx = tData2.findIndex((data) => data.date === `${startDate}`)
  const lastIdx = tData2.findIndex((data) => data.date === `${endDate}`)
  const distance = lastIdx - currentIdx

  if (currentIdx - distance <= 0) return undefined

  const prevSliceArr = tData2.slice(currentIdx - distance - 1, lastIdx - distance)
  const currentSliceArr = tData2.slice(currentIdx, lastIdx + 1)

  const prevArr = getSumObj(prevSliceArr) // 그 이전 날짜 범위
  const currentArr = getSumObj(currentSliceArr) // 현재 날짜 범위

  const newArr = [prevArr, currentArr]

  const test = newArr.reduce((prev, current): ITrend2DataSet => {
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

export const getTransformedData = (data: ITrendDataSet[]) => {
  return data.map((newD) => {
    return {
      roas: Math.round(newD.roas),
      cost: newD.cost,
      imp: newD.imp,
      click: newD.click,
      conv: newD.conv,
      sales: Math.round(getMultiAndDiv(newD.roas, newD.cost, 100)),
      date: newD.date,
    }
  })
}

export function getCurrentData(startDate: string, endDate: string | null, tData: ITrend2DataSet[] | undefined) {
  if (!tData) return undefined

  const currentIdx = tData && tData.findIndex((data) => data.date === `${startDate}`)
  const lastIdx = tData && tData.findIndex((data) => data.date === `${endDate}`)

  const slicedData = tData && tData.slice(currentIdx, lastIdx + 1)

  if (currentIdx === lastIdx) {
    const testArr =
      slicedData &&
      slicedData.map((value) => {
        return {
          roas: value.roas,
          cost: value.cost,
          imp: value.imp,
          click: value.click,
          conv: value.conv,
          sales: value.sales,
        }
      })
    return testArr[0]
  }

  const currentArr = slicedData && getSumObj(slicedData) // 현재 날짜 범위

  return currentArr
}
