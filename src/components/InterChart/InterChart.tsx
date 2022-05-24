import { useRecoilValue } from 'recoil'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryTheme, VictoryVoronoiContainer, VictoryTooltip } from 'victory'

import { firstCurrentData, secondCurrentData } from 'recoil/recoil.state'
import { Data } from './convertData.util'

import styles from 'styles'
import { useCallback } from 'react'
import useColorPickCallback from 'hooks/useColorPickCallback'

interface InterChartProps {
  firstMenuState: string
  secondMenuState: string
  thirdMenuState: string
}

const InterChart = ({ firstMenuState, secondMenuState, thirdMenuState }: InterChartProps) => {
  const firstData = useRecoilValue(firstCurrentData)
  const secondData = useRecoilValue(secondCurrentData)

  const maxValue = useCallback((value: Data[]) => {
    return value.reduce((max, current) => (current.y > max ? current.y : max), value[0].y)
  }, [])

  const setUnit = useCallback((menuState: string) => {
    const tickFormSet = {
      ROAS: '%',
      광고비: '원',
      노출수: 'imp',
      클릭수: 'click',
      전환수: 'cv',
      매출: '원',
    }[menuState]
    if (!menuState) return ''
    return tickFormSet
  }, [])

  const setColor = useColorPickCallback()

  const setDayType = useCallback((dataType: string) => {
    const dayCutNum = {
      주간: 14,
      일별: 7,
    }[dataType]
    if (!dataType) return 7
    return dayCutNum
  }, [])

  return (
    <div className={styles.chart}>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        width={960}
        height={320}
        domain={{ y: [0, 1] }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension='x'
            labels={({ datum }) => `${datum.y}`}
            labelComponent={<VictoryTooltip cornerRadius={5} flyoutStyle={{ fill: 'white' }} />}
          />
        }
      >
        <VictoryAxis
          tickFormat={(t) => `${t.slice(5, 7)}월 ${t.slice(8)}일`}
          style={{
            tickLabels: { fill: 'gray', fontSize: 12 },
          }}
        />

        <VictoryAxis
          dependentAxis
          orientation='left'
          offsetX={50}
          style={{
            axis: { strokeWidth: 0 },
            grid: { stroke: 'gray', strokeWidth: 1 },
            ticks: { padding: 0 },
            tickLabels: { fill: 'gray', textAnchor: 'middle' },
          }}
          tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={(t) => `${Math.round(t * maxValue(firstData))} ${setUnit(firstMenuState)}`}
        />
        <VictoryLine
          data={firstData.slice(0, setDayType(thirdMenuState))}
          style={{ data: { stroke: setColor(firstMenuState) } }}
          y={(datum) => datum.y / maxValue(firstData)}
        />
        {!!secondData.length && (
          <VictoryAxis
            dependentAxis
            orientation='right'
            offsetX={50}
            style={{
              axis: { strokeWidth: 0 },
              grid: { stroke: 'gray', strokeWidth: 1 },
              ticks: { padding: 0 },
              tickLabels: { fill: 'gray', textAnchor: 'start' },
            }}
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(t) => `${Math.round(t * maxValue(secondData))} ${setUnit(secondMenuState)}`}
          />
        )}
        <VictoryLine
          data={secondData.slice(0, setDayType(thirdMenuState))}
          style={{ data: { stroke: setColor(secondMenuState) } }}
          y={(datum) => datum.y / maxValue(secondData)}
        />
      </VictoryChart>
    </div>
  )
}

export default InterChart
