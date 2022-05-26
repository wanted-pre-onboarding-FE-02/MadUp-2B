import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTooltip } from 'victory'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import { pickedEndDateState, pickedStartDateState } from 'recoil/dateAtom'
import { getMediaDataApi } from 'services/fakeApi'

import transformData from './transformData'
import ChartLegend from './ChartLegend'

import styles from './percentColumnChart.module.scss'

const PercentColumnChart = () => {
  const startDate = useRecoilValue(pickedStartDateState)
  const endDate = useRecoilValue(pickedEndDateState)
  const { data: dataList } = useQuery(
    ['getMediaDataApi', startDate, endDate],
    () =>
      getMediaDataApi().then((res) => {
        const result = transformData(res, startDate, endDate)
        return result
      }),
    {
      enabled: !!endDate,
      suspense: true,
    }
  )

  const symbolData = [
    { name: 'google', color: '#AC8AF8' },
    { name: 'facebook', color: '#4FADF7' },
    { name: 'naver', color: '#85DA47' },
    { name: 'kakao', color: '#FFEB00' },
  ]

  if (!dataList) return null
  return (
    <div className={styles.wrapper}>
      <VictoryChart width={1400} height={500} padding={{ bottom: 50 }} domainPadding={{ x: 100, y: 10 }}>
        <VictoryAxis
          dependentAxis
          offsetX={10}
          tickLabelComponent={<VictoryLabel dy={15} textAnchor='start' />}
          tickFormat={(tick) => `${tick}%`}
          style={{
            axis: { stroke: 'white' },
            grid: { stroke: '#94A2AD' },
            tickLabels: { fontSize: 20, padding: 10 },
          }}
        />
        <VictoryStack colorScale={['#AC8AF8', '#4FADF7', '#85DA47', '#FFEB00']}>
          {dataList.map((data, i) => {
            const key = `bar-${i}`
            return (
              <VictoryBar
                key={key}
                data={data}
                barRatio={0.3}
                x='category'
                y='value'
                labelComponent={<VictoryTooltip style={{ fontSize: 16 }} />}
              />
            )
          })}
        </VictoryStack>
        <VictoryAxis
          tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']}
          style={{
            tickLabels: { fontSize: 15 },
          }}
        />
      </VictoryChart>
      <ChartLegend symbolData={symbolData} />
    </div>
  )
}

export default PercentColumnChart
