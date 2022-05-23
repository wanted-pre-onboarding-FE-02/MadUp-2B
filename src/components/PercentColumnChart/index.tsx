import { VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryStack } from 'victory'
// import styles from './percentColumnChart.module.scss'
import MEDIA_DATA from 'assets/json/MEDIA_DATA.json'
import _, { values } from 'lodash'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

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

const dataStructure = [
  { category: '광고비', value: 0 },
  { category: '매출', value: 0 },
  { category: '노출 수', value: 0 },
  { category: '클릭 수', value: 0 },
  { category: '전환 수', value: 0 },
]

type paramfun = (item: IData) => number
// google, facebook, naver, kakao
const transformData = () => {
  const data: Record<string, { value: number; category: string }[]> = {
    google: _.cloneDeep(dataStructure),
    facebook: _.cloneDeep(dataStructure),
    naver: _.cloneDeep(dataStructure),
    kakao: _.cloneDeep(dataStructure),
  }

  const total = (f: paramfun) => MEDIA_DATA.reduce((acc, cur) => acc + f(cur), 0)

  // {
  //   "channel": "google",
  //   "date": "2022-02-05",
  //   "imp": 62,
  //   "click": 12,
  //   "cost": 3006,
  //   "convValue": 9,
  //   "ctr": 19.3548,
  //   "cvr": 75.0000,
  //   "cpc": 250.5000,
  //   "cpa": 334.0000,
  //   "roas": 5619.7272
  // },

  MEDIA_DATA.forEach((d) => {
    data[d.channel].find((item) => item.category === '광고비')!.value += d.cost
    data[d.channel].find((item) => item.category === '매출')!.value += (d.roas * d.cost) / 100
    data[d.channel].find((item) => item.category === '노출 수')!.value += d.imp
    data[d.channel].find((item) => item.category === '클릭 수')!.value += d.click
    data[d.channel].find((item) => item.category === '전환 수')!.value += d.convValue
  })

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const result1 = data[key].find((item) => item.category === '광고비')
      if (result1) result1.value = (result1.value / total((cur) => cur.cost)) * 100

      const result2 = data[key].find((item) => item.category === '매출')
      if (result2) result2.value = (result2.value / total((cur) => (cur.roas * cur.cost) / 100)) * 100

      const result3 = data[key].find((item) => item.category === '노출 수')
      if (result3) result3.value = (result3.value / total((cur) => cur.imp)) * 100

      const result4 = data[key].find((item) => item.category === '클릭 수')
      if (result4) result4.value = (result4.value / total((cur) => cur.click)) * 100

      const result5 = data[key].find((item) => item.category === '전환 수')
      if (result5) result5.value = (result5.value / total((cur) => cur.convValue)) * 100
    }
  }

  return data
}

const PercentColumnChart = () => {
  const { google, facebook, naver, kakao } = transformData()

  return (
    <div>
      <VictoryChart width={1500} height={800} domainPadding={{ x: 100, y: 10 }}>
        <VictoryLegend
          x={125}
          y={0}
          centerTitle
          orientation='horizontal'
          gutter={20}
          style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
          data={[
            { name: 'google', symbol: { fill: '#AC8AF8' } },
            { name: 'facebook', symbol: { fill: '#4FADF7' } },
            { name: 'naver', symbol: { fill: '#85DA47' } },
            { name: 'kakao', symbol: { fill: '#FFEB00' } },
          ]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick}%`}
          style={{
            grid: { stroke: 'black', strokeWidth: 0.2 },
          }}
        />
        <VictoryStack
          colorScale={['#AC8AF8', '#85DA47', '#4FADF7', '#FFEB00']}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 4,
            },
          }}
        >
          <VictoryBar data={google} x='category' y='value' cornerRadius={{ top: 2 }} />
          <VictoryBar data={naver} x='category' y='value' cornerRadius={{ top: 2 }} />
          <VictoryBar data={facebook} x='category' y='value' cornerRadius={{ top: 2 }} />
          <VictoryBar data={kakao} x='category' y='value' cornerRadius={{ top: 2 }} />
        </VictoryStack>

        <VictoryAxis tickFormat={['광고비', '매출', '노출 수', '클릭 수', '전환 수']} />
      </VictoryChart>
    </div>
  )
}

export default PercentColumnChart
