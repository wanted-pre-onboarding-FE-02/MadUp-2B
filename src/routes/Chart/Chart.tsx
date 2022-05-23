import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from 'victory'
import styles from './corona.module.scss'

import CHART_STYLE from './chartStyle'
import CHANNEL_DATA from './channelData.json'

interface Props {
  data?: string
}

const dataStructure = [
  { value: 0, category: '광고비' },
  { value: 0, category: '매출' },
  { value: 0, category: '노출 수' },
  { value: 0, category: '클릭 수' },
  { value: 0, category: '전환 수' },
]

const getFuck = () => {
  const data: Record<string, { value: number; category: string }[]> = {
    google: [...dataStructure],
    facebook: [...dataStructure],
    naver: [...dataStructure],
    kakao: [...dataStructure],
  }
  console.log(CHANNEL_DATA)
  CHANNEL_DATA.forEach((d) => {
    data[d.channel].find((item) => item.category === '광고비')!.value += d.cost
    data[d.channel].find((item) => item.category === '매출')!.value += (d.roas * d.cost) / 100
    data[d.channel].find((item) => item.category === '노출 수')!.value += d.imp
    data[d.channel].find((item) => item.category === '클릭 수')!.value += d.click
    data[d.channel].find((item) => item.category === '전환 수')!.value += d.convValue
  })

  return data
}

// {
//   "channel": "google",
//   "date": "2022-02-01",
//   "imp": 50, // 노출
//   "click": 7, // 클릭
//   "cost": 2098, // 광고비
//   "convValue": 0, // 전환비용?
//   "ctr": 14.0000, // 클릭률
//   "cvr": 0.0000, // 전환률
//   "cpc": 299.7143, // click per click
//   "cpa": 0.0000, // click per action
//   "roas": 0.0000 // 광고 지출 대비 수익률
// },

// convValue / cost * 100 = roas
// ['cost', 'const x roas', 'imp', 'click', 'imp * cvr']

/*

  광고비 : cost
  매출 : roas * cost/100
  노출수: imp
  클릭수: click
  전환수: convValue
*/

const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수']

const { google, facebook, naver, kakao } = getFuck()
console.log(google)
const Chart = ({ data }: Props) => {
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis tickValues={tickFormat} tickFormat={tickFormat} />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `${x / 1000_000}m`}
        />
        <VictoryStack colorScale={['#AC8AF8', '#85DA47', '#4FADF7', '#FFEB00']}>
          <VictoryBar data={google} {...CHART_STYLE.bar} />
          <VictoryBar data={facebook} {...CHART_STYLE.bar} />
          <VictoryBar data={naver} {...CHART_STYLE.bar} />
          <VictoryBar data={kakao} {...CHART_STYLE.bar} cornerRadius={{ top: 6 }} />
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default Chart
