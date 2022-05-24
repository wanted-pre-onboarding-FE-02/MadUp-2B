import { VictoryAxis, VictoryBar, VictoryChart, VictoryLegend, VictoryStack, VictoryTooltip } from 'victory'
import styles from './percentColumnChart.module.scss'
import MEDIA_DATA from 'assets/json/MEDIA_DATA.json'
import transformData from './transformData'

const PercentColumnChart = () => {
  const dataList = transformData(MEDIA_DATA)
  return (
    <div className={styles.wrapper}>
      <VictoryChart width={1400} height={800} domainPadding={{ x: 100, y: 10 }}>
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
    </div>
  )
}

export default PercentColumnChart
