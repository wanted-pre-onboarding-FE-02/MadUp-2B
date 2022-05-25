import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTooltip } from 'victory'
import styles from './percentColumnChart.module.scss'
import MEDIA_DATA from 'assets/json/MEDIA_DATA.json'
import transformData from './transformData'
import ChartLegend from './ChartLegend'

const PercentColumnChart = () => {
  const dataList = transformData(MEDIA_DATA)
  const symbolData = [
    { name: 'google', color: '#AC8AF8' },
    { name: 'facebook', color: '#4FADF7' },
    { name: 'naver', color: '#85DA47' },
    { name: 'kakao', color: '#FFEB00' },
  ]

  return (
    <div className={styles.wrapper}>
      <VictoryChart width={1400} height={500} padding={0} domainPadding={{ x: 100, y: 10 }}>
        <VictoryAxis
          dependentAxis
          offsetX={10}
          tickLabelComponent={<VictoryLabel dy={15} textAnchor='start' />}
          tickFormat={(tick) => `${tick}%`}
          style={{
            axis: { stroke: 'white' },
            grid: { stroke: 'grey' },
            tickLabels: { fontSize: 20, padding: 10 },
          }}
        />
        <VictoryStack
          colorScale={['#AC8AF8', '#4FADF7', '#85DA47', '#FFEB00']}
          style={{
            data: {
              stroke: 'white',
              strokeWidth: 4,
            },
          }}
        >
          {dataList.map((data, i) => {
            const key = `bar-${i}`
            return (
              <VictoryBar
                key={key}
                data={data}
                barRatio={0.3}
                x='category'
                y='value'
                cornerRadius={{ top: 5 }}
                labels={({ datum }) => datum.value}
                labelComponent={<VictoryTooltip />}
              />
            )
          })}
        </VictoryStack>
        <VictoryAxis tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']} />
      </VictoryChart>
      <ChartLegend symbolData={symbolData} />
    </div>
  )
}

export default PercentColumnChart
