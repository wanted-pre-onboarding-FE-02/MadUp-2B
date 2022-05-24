import _ from 'lodash'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

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

const transformData = (MEDIA_DATA: IData[]) => {
  dayjs.extend(isBetween)
  const START = '2022-02-09'
  const END = '2022-02-14'
  const dataStructure = {
    cost: 0,
    sales: 0,
    roas: 0,
    imp: 0,
    click: 0,
    ctr: 0,
    cpc: 0,
    // channel: '',
  }
  const funArr = [
    (cur: IData) => cur.cost,
    (cur: IData) => (cur.roas * cur.cost) / 100,
    (cur: IData) => cur.roas,
    (cur: IData) => cur.imp,
    (cur: IData) => cur.click,
    (cur: IData) => cur.ctr,
    (cur: IData) => cur.cpc,
  ]

  const mediaData = (channel: string) =>
    _.chain(MEDIA_DATA)
      .filter((item) => item.channel === channel)
      .filter((item) => dayjs(item.date).isBetween(START, END, undefined, '[]'))
      .reduce((acc, cur) => {
        const tt = funArr.map((f, i) => [acc[i][0], acc[i][1] + f(cur)]) as [string, number][]
        return tt
      }, _.cloneDeep(_.toPairs(dataStructure)))
      .map((item) => [item[0], Math.round(item[1])])
      .concat([['channel', channel]])
      .fromPairs()
      .value()

  const dataList = [mediaData('google'), mediaData('facebook'), mediaData('naver'), mediaData('kakao')]

  const total = _.chain(_.cloneDeep(dataList))
    .reduce((acc, cur) => {
      for (const key in cur) {
        if (Object.prototype.hasOwnProperty.call(cur, key)) acc[key] += cur[key]
      }
      return acc
    })
    .value()
  return { dataList, total }
}

export default transformData