import _ from 'lodash'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { getMultiAndDiv, getPlus } from 'utils/num'

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

type paramfun = (item: IData) => number

const transformData = (MEDIA_DATA: IData[]) => {
  dayjs.extend(isBetween)
  const START = '2022-02-09'
  const END = '2022-02-14'

  const categoryArr = ['광고비', '매출', '노출수', '클릭수', '전환수']
  const funArr = [
    // categoryArr 인덱스에 대응하는 계산함수를 가지고 있습니다.
    (cur: IData) => cur.cost,
    (cur: IData) => getMultiAndDiv(cur.roas, cur.cost, 100),
    (cur: IData) => cur.imp,
    (cur: IData) => cur.click,
    (cur: IData) => cur.convValue,
  ]

  const total = (f: paramfun) =>
    _.chain(MEDIA_DATA)
      .filter((item) => dayjs(item.date).isBetween(START, END, undefined, '[]'))
      .reduce((acc, cur) => acc + f(cur), 0)
      .value()

  const mediaData = (channel: string) =>
    _.chain(MEDIA_DATA)
      .filter((item) => item.channel === channel)
      .filter((item) => dayjs(item.date).isBetween(START, END, undefined, '[]'))
      .reduce((acc, cur) => funArr.map((f, i) => getPlus(acc[i], f(cur))), [0, 0, 0, 0, 0])
      .map((item, i) => ({ category: categoryArr[i], value: (item / total(funArr[i])) * 100 }))
      .value()

  return [mediaData('google'), mediaData('facebook'), mediaData('naver'), mediaData('kakao')]
}

export default transformData
