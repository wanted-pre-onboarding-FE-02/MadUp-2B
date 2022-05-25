import _ from 'lodash'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { getMultiAndDiv, getPlus } from 'utils/num'
import { IMediaData } from 'types/media'

type paramfun = (item: IMediaData) => number

const transformData = (MEDIA_DATA: IMediaData[], startDate: string, endDate: string | null) => {
  dayjs.extend(isBetween)

  const categoryArr = ['광고비', '매출', '노출수', '클릭수', '전환수']
  const funArr = [
    // categoryArr 인덱스에 대응하는 계산함수를 가지고 있습니다.
    (cur: IMediaData) => cur.cost,
    (cur: IMediaData) => getMultiAndDiv(cur.roas, cur.cost, 100),
    (cur: IMediaData) => cur.imp,
    (cur: IMediaData) => cur.click,
    (cur: IMediaData) => cur.convValue,
  ]

  const total = (f: paramfun) =>
    _.chain(MEDIA_DATA)
      .filter((item) => dayjs(item.date).isBetween(startDate, endDate, undefined, '[]'))
      .reduce((acc, cur) => acc + f(cur), 0)
      .value()

  const mediaData = (channel: string) =>
    _.chain(MEDIA_DATA)
      .filter((item) => item.channel === channel)
      .filter((item) => dayjs(item.date).isBetween(startDate, endDate, undefined, '[]'))
      .reduce((acc, cur) => funArr.map((f, i) => getPlus(acc[i], f(cur))), [0, 0, 0, 0, 0])
      .map((item, i) => ({
        category: categoryArr[i],
        value: (item / total(funArr[i])) * 100,
        label: Math.round(item).toLocaleString(),
      }))
      .value()

  return [mediaData('google'), mediaData('facebook'), mediaData('naver'), mediaData('kakao')]
}

export default transformData
