import { atom, selector } from 'recoil'

import { Data, convertData } from 'components/InterChart/convertData.util'
import TRENDDATASET from '../components/InterChart/trendDataSet.json'

const drowdownMenuList = ['ROAS', '광고비', '노출수', '클릭수', '전환수', '매출', '선택사항 없음']
const selectDayAndWeek = ['주간', '일별']
const trendDataSet = convertData(TRENDDATASET)

export const dropdownFirstMenuState = atom<string>({
  key: 'dropdownFirstMenuState',
  default: 'ROAS',
})

export const dropdownSecondMenuState = atom<string>({
  key: 'dropdownSecondMenuState',
  default: '선택사항 없음',
})

export const dropdownThirdMenuState = atom<string>({
  key: 'dropdownThirdMenuState',
  default: '주간',
})

export const drowdownMenuListState = selector<string[]>({
  key: 'drowdownMenuListState',
  get: ({ get }) => {
    const first = get(dropdownFirstMenuState)
    const second = get(dropdownSecondMenuState)
    const filterd = drowdownMenuList.filter((item) => item !== first && item !== second)
    return filterd
  },
})

export const selectDayAndWeekState = selector<string[]>({
  key: 'selectDayAndWeekState',
  get: ({ get }) => {
    const TimeType = get(dropdownThirdMenuState)
    const filterd = selectDayAndWeek.filter((item) => item !== TimeType)
    return filterd
  },
})

export const firstCurrentData = selector<Data[]>({
  key: 'firstCurrentData',
  get: ({ get }) => {
    const firstMenuID = get(dropdownFirstMenuState)
    switch (firstMenuID) {
      case 'ROAS':
        return trendDataSet.roas
      case '광고비':
        return trendDataSet.cost
      case '노출수':
        return trendDataSet.imp
      case '클릭수':
        return trendDataSet.click
      case '전환수':
        return trendDataSet.conv
      case '매출':
        return trendDataSet.click
      default:
        return []
    }
  },
})

export const secondCurrentData = selector<Data[]>({
  key: 'secondCurrentData',
  get: ({ get }) => {
    const secondMenuID = get(dropdownSecondMenuState)
    switch (secondMenuID) {
      case 'ROAS':
        return trendDataSet.roas
      case '광고비':
        return trendDataSet.cost
      case '노출수':
        return trendDataSet.imp
      case '클릭수':
        return trendDataSet.click
      case '전환수':
        return trendDataSet.conv
      case '매출':
        return trendDataSet.click
      default:
        return []
    }
  },
})
