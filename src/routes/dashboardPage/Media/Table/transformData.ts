import _ from 'lodash'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

import { getMultiAndDiv, getPlus } from 'utils/num'
import { IMediaData } from 'types/media'

const transformData = (MEDIA_DATA: IMediaData[], startDate: string, endDate: string | null) => {
  dayjs.extend(isBetween)
  const dataStructure = {
    cost: 0,
    sales: 0,
    roas: 0,
    imp: 0,
    click: 0,
    ctr: 0,
    cpc: 0,
  }
  const funArr = [
    (cur: IMediaData) => cur.cost,
    (cur: IMediaData) => getMultiAndDiv(cur.roas, cur.cost, 100),
    (cur: IMediaData) => cur.roas,
    (cur: IMediaData) => cur.imp,
    (cur: IMediaData) => cur.click,
    (cur: IMediaData) => cur.ctr,
    (cur: IMediaData) => cur.cpc,
  ]

  const mediaData = (channel: string) =>
    _.chain(MEDIA_DATA)
      .filter((item) => item.channel === channel)
      .filter((item) => dayjs(item.date).isBetween(startDate, endDate, undefined, '[]'))
      .reduce((acc, cur) => {
        const tt = funArr.map((f, i) => [acc[i][0], getPlus(acc[i][1], f(cur))]) as [string, number][]
        return tt
      }, _.cloneDeep(_.toPairs(dataStructure)))
      .map((item) => [item[0], Math.round(item[1])])
      .concat([['channel', channel]])
      .fromPairs()
      .value()

  const dataList = [mediaData('google'), mediaData('facebook'), mediaData('naver'), mediaData('kakao')]

  const total = _.chain(_.cloneDeep(dataList))
    .reduce((acc, cur) => {
      for (const key in cur) if (Object.prototype.hasOwnProperty.call(cur, key)) acc[key] += cur[key]
      return acc
    })
    .value()

  return { dataList, total }
}

export default transformData
